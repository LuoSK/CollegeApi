const Axios = require('axios')
const axios = Axios.create({
  timeout: 5000
})
function createRequest(method, url, query, data, responseType) {
  return new Promise((resolve, reject) => {
    axios.request({
      url,
      method,
      params: query,
      data,
      responseType
    })
      .then(res => {
        if (responseType === 'arraybuffer') {
          res.data = new Buffer.from(res.data, 'binary')
        }
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}
module.exports = createRequest