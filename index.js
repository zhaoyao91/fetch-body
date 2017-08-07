module.exports = function (fetch) {
  return async function fetchBody (url, options) {
    const res = await fetch(url, options)
    if (!res.ok) throw new FetchBodyError('Response is not ok', res)

    if (!(res.headers.get('content-length') > 0)) return undefined
    else if (res.headers.get('content-type') === 'application/json') return await res.json()
    else return await res.text()
  }
}

class FetchBodyError extends Error {
  constructor (msg, response) {
    super(msg)
    this.response = response
  }
}

FetchBodyError.name = 'FetchBodyError'