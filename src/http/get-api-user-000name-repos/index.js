const arc = require('@architect/functions')
const { userRepos } = require('@architect/shared/data')
const auth = require('@architect/shared/auth')

exports.handler= arc.http.async(auth, getUserRepos, userNotFound)

async function getUserRepos(req) {
  const name = req.params.name;
  const user = userRepos[name];

  if (user) return {
    statusCode: 200,
    json: user
  }
}

async function userNotFound() {
  return {
    statusCode: 404,
    json: { error: `Sorry, can't find that` }
  }
}
