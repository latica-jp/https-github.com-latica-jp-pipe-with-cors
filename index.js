const request = require('request-promise')
module.exports = async (req, res) => {
  await request.get(req.query.url).pipe(res)
}
