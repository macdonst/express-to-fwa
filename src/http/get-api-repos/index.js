const arc = require('@architect/functions')
const { repos } = require('@architect/shared/data')
const auth = require('@architect/shared/auth')

exports.handler = arc.http.async(auth, getRepos)

async function getRepos() {
  return {
    statusCode: 200,
    json: repos
  }
}


