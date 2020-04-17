import config from '../../../config'

export const getUserMeta = (user, key) => {
    return user[config.siteUrl+'/'+key]
}