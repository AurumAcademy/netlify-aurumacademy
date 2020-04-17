import config from '../../../../config'

export const stripeCharge = async (data) => {
  return new Promise((resolve, reject) => {
    fetch(config.backend+'/stripe/charge', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        console.log('util respo')
          resolve(response.json())
      })
      .catch(error => reject(error))
  })
}