@app
express-to-begin

@http
get /api/users
get /api/repos
get /api/user/:name/repos
get /*

@aws
# profile default
region us-west-2
architecture arm64
