const getFetchOptions = (method, params = {}, headers = {}) => {
  return {
    method,
    headers: {
      ...{
        'Content-Type': 'application/json'
      },
      ...headers
    },
    credentials: 'same-origin',
    body: method !== 'GET' ? JSON.stringify(params) : undefined
  }
}

const fetchRest = (method, url, { params, headers = {} }) => {
  return fetch(url, getFetchOptions(method, params, headers))
    .then(resp => {
      // console.log('resp', resp)
      return resp.json()
        .then(respJson => {
          return { data: respJson, status: resp.status }
        })
        .catch(err => {
          return { status: resp.status }
        })
    })
    .then((responseJson) => {
      // console.log('responseJson', responseJson)
      if (!!responseJson.error || !!responseJson.errors || !!responseJson.errorCodes || responseJson.status >= 400) {
        throw responseJson
      } else {
        // console.log('Success Response JSON', responseJson)
        return responseJson
      }
    })
    .catch(err => {
      console.log(err)
      throw err
    })
}

export const Get = (url, params) => fetchRest('GET', url, { params })
export const Put = (url, { params = {}, headers = {} } = {}) => fetchRest('PUT', url, { params, headers })
export const Post = (url, { params = {}, headers = {} } = {}) => fetchRest('POST', url, { params, headers })
export const Delete = (url, { params = {}, headers = {} } = {}) => fetchRest('DELETE', url, { params, headers })
