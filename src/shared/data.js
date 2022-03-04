// these three objects will serve as our faux database
const repos = [
    { name: 'architect', url: 'https://github.com/architect/architect' },
    { name: 'functions', url: 'https://github.com/architect/functions' },
    { name: 'sandbox', url: 'https://github.com/architect/sandbox' }
]

const users = [
    { name: 'brian' },
    { name: 'kj' },
    { name: 'ryan' }
 ]

const userRepos = {
    brian: [repos[0], repos[1]],
    kj: [repos[1]],
    ryan: [repos[2]]
}

module.exports = { repos, users, userRepos }
