import auth0 from "auth0-js"
import { navigate } from "gatsby"
import config from '../../config'

const isBrowser = typeof window !== "undefined"

const auth = isBrowser
  ? new auth0.WebAuth({
      domain: process.env.GATSBY_AUTH0_DOMAIN,
      clientID: process.env.GATSBY_AUTH0_CLIENTID,
      redirectUri: process.env.GATSBY_AUTH0_CALLBACK,
      responseType: "token id_token",
      scope: "openid profile email",
    })
  : {}

const tokens = {
  accessToken: false,
  idToken: false,
  expiresAt: false,
}

let user = {}
let profile = {}

const getUserMeta = (user, key) => {
  return user[config.siteUrl+(process.env.NODE_ENV.toLowerCase() === 'production' ? '/' : '/test/')+key]
}

export const isAuthenticated = () => {
  if (!isBrowser) {
    return
  }

  return localStorage.getItem("isLoggedIn") === "true"
}

export const login = () => {
  if (!isBrowser) {
    return
  }
  auth.authorize()
}

const setSession = async (cb = () => {}) => async (err, authResult) => {
  if (err) {
    navigate("/")
    cb()
    return
  }

  if (authResult && authResult.accessToken && authResult.idToken) {
    let expiresAt = authResult.expiresIn * 1000 + new Date().getTime()
    tokens.accessToken = authResult.accessToken
    tokens.idToken = authResult.idToken
    tokens.expiresAt = expiresAt

    user = authResult.idTokenPayload
    await setProfile()
    // console.log(profile)
    localStorage.setItem("isLoggedIn", true)

    if (window.location.pathname === '/auth/callback') {
      navigate("/account")
    }
    cb()
  }
}

export const silentAuth = async callback => {
  if (!isAuthenticated()) return callback()
  auth.checkSession({}, await setSession(callback))
}

export const handleAuthentication = async () => {
  if (!isBrowser) {
    console.warn('Blocked auth on a non-browser request')
    return
  }

  auth.parseHash(await setSession())
}

export const setProfile = async () => {
  let p = {
    name: user.name,
    email: user.email,
    students: [],
    stripe_cus: getUserMeta(user, 'stripe_cus')
  }

  try {
    const response = await fetch(process.env.GATSBY_BACKEND+'/api/user', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        customer: p.stripe_cus
      })
    })
    const data = await response.json()
    for (let key in data) {
      if (data[key]) {
        p[key] = data[key]
      }
    }
  } catch(error) {
    console.log(error)
  } finally {
    profile = p
    return profile
  }

}

export const getProfile = () => {
  return profile
}




export const logout = () => {
  localStorage.setItem("isLoggedIn", false)
  auth.logout()
}