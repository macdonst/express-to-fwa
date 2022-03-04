const apiKeys = ['foo', 'bar', 'baz'];

async function auth(req) {
    const key = req.query['api-key'];

    // key isn't present
    if (!key) return {
        statusCode: 400,
        json: { error: 'api key required' }
    }

    // key is invalid
    if (apiKeys.indexOf(key) === -1) return {
        statusCode: 401,
        json: { error: 'invalid api key' }
    }

    // all good, store req.key for route access
    req.key = key;
}

module.exports = auth
