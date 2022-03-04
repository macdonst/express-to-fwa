const arc = require('@architect/functions')
const serverless = require('serverless-http');
const express = require('express')
const app = express();

function error(status, msg) {
  const err = new Error(msg);
  err.status = status;
  return err;
}

const apiKeys = ['foo', 'bar', 'baz'];

app.use('/api', function(req, res, next){
  const key = req.query['api-key'];
  if (!key) return next(error(400, 'api key required'));
  if (apiKeys.indexOf(key) === -1) return next(error(401, 'invalid api key'))
  req.key = key;
  next();
});

const repos = [
  { name: 'architect', url: 'https://github.com/architect/architect' },
  { name: 'functions', url: 'https://github.com/architect/functions' },
  { name: 'sandbox', url: 'https://github.com/architect/sandbox' }
];

const users = [
  { name: 'brian' },
  { name: 'kj' },
  { name: 'ryan' }
];

const userRepos = {
  brian: [repos[0], repos[1]],
  kj: [repos[1]],
  ryan: [repos[2]]
};

// example: http://localhost:3000/api/users/?api-key=foo
app.get('/api/users', function(req, res, next){
  res.send(users);
});

// example: http://localhost:3000/api/repos/?api-key=foo
app.get('/api/repos', function(req, res, next){
  res.send(repos);
});

// example: http://localhost:3000/api/user/tobi/repos/?api-key=foo
app.get('/api/user/:name/repos', function(req, res, next){
  const name = req.params.name;
  const user = userRepos[name];

  if (user) res.send(user);
  else next();
});

app.use(function(req, res){
  res.status(404);
  res.send({ error: "Sorry, can't find that" })
});

let server = serverless(app)
exports.handler = arc.http.async(server)
