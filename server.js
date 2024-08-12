const express = require('express')
const path = require('path')
const { getUserByName } = require('./utils/github')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

const router = express.Router()

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/find', async (req, res) => {
  const user = await getUserByName(req.body.name)

  if (!!user.login) {
    const html = `
      <div>
        <div>
          <img src="${user.avatar_url}"/>
        </div>
        <div>
          <div>
            <p>${user.name}</p>
            <p>${user.login}</p>
          </div>
          <p>${user.bio}</p>
          <div>
            <div>
              <i class=""></i>
              <p>${user.location}</p>
            </div>
            <div>
              <i class=""></i>
              <p>${user.company}</p>
            </div>
            <div>
              <i class=""></i>
              <p>${user.blog}</p>
            </div>
            <div>
              <i class=""></i>
              <p>${user.twitter_username}</p>
            </div>
          </div>
        </div>
      </div>
    `

    return res.send(html)
  }
  const html = `
    <div>
      <p>User not found</p>
    </div>
  `
  res.send(html)
})

app.use(router)

app.listen(3000, () => {
  console.log('server running at http://localhost:' + 3000)
})
