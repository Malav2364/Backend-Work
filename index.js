require('dotenv').config()
const express = require('express')
const githubData = {
    "login": "Malav2364",
    "id": 95128635,
    "node_id": "U_kgDOBauMOw",
    "avatar_url": "https://avatars.githubusercontent.com/u/95128635?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Malav2364",
    "html_url": "https://github.com/Malav2364",
    "followers_url": "https://api.github.com/users/Malav2364/followers",
    "following_url": "https://api.github.com/users/Malav2364/following{/other_user}",
    "gists_url": "https://api.github.com/users/Malav2364/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Malav2364/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Malav2364/subscriptions",
    "organizations_url": "https://api.github.com/users/Malav2364/orgs",
    "repos_url": "https://api.github.com/users/Malav2364/repos",
    "events_url": "https://api.github.com/users/Malav2364/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Malav2364/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Malav Patel",
    "company": null,
    "blog": "",
    "location": "India",
    "email": null,
    "hireable": null,
    "bio": "Passionate tech enthusiast and coding wizard, weaving digital dreams one line at a time. 🚀👨‍💻",
    "twitter_username": "MalavPatel2379",
    "public_repos": 12,
    "public_gists": 0,
    "followers": 0,
    "following": 4,
    "created_at": "2021-11-27T11:37:24Z",
    "updated_at": "2023-09-27T12:30:58Z"
  }
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('malav2364')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please Login at Malav Patel</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2>Malav Patel</h2>')
})

app.get('/github', (req, res) => {
    res.send(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})