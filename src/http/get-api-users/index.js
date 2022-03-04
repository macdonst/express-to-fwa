const arc = require('@architect/functions')
const { users } = require('@architect/shared/data')
const auth = require('@architect/shared/auth')

exports.handler = arc.http.async(auth, getUsers)

async function getUsers() {
  return {
    statusCode: 200,
    json: users
  }
}
