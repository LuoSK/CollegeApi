const fs = require('fs')
const { join } = require('path')
function requireDir(path, cb) {
  fs.readdirSync(path).forEach(filename => {
    const joined = join(path, filename)
    if (fs.statSync(joined).isDirectory()) {
      requireDir(joined, cb)
    } else {
      cb(module.require(joined), joined, filename)
    }
  })
}
module.exports = {
  requireDir
}