const express = require("express"),
      redis = require('redis'),
      formidable = require('formidable'),
      app = express()

const port = 3000

client = redis.createClient()

app.use(express.static(__dirname + "/client"))

app.post("/hello", function (req, res) {
  let form = new formidable.IncomingForm()
    form.parse(req, function (err, fields, files) {
      client.set(fields.email, "{'firstname':"+fields.firstname+"'lastname':"+fields.lastname+"}" , function(err){
        console.log('already add into database')
      })
    })
    res.send("Hello World!")
})

app.listen(port, () => console.log('server start at port '+port))
