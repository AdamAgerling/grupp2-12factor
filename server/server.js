const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
const mongo = require("mongodb").MongoClient
const URL = "mongodb://localhost:27017"
let db

mongo.connect(
  URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) {
      console.error(err)
      return
    }
    db = client.db("grupp2")
    // eslint-disable-next-line no-undef
    users = db.collection("users")
  }
)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors())
app.use(express.static("public"))
const port = 3001

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.post("/api/users", (req, res) => {
  let userName = req.body.userName
  let password = req.body.password

  // eslint-disable-next-line no-undef
  users.insertOne(
    {
      userName: userName,
      password: password,
    },
    (err, result) => {
      if (err) throw err
      console.log(result)
      res.json({ ok: true })
    }
  )
})

app.get("/api/users", (req, res) => {
  // eslint-disable-next-line no-undef
  users.find().toArray((err, items) => {
    if (err) throw err
    res.json({ users: items })
  })
})
