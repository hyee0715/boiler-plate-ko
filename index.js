const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://hyee0715:mongo0715@boilerplate.jy3br.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').then(() => console.log('MongoDB Connected...')).catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World! ㅎㅇㅎㅇ 새로운 시작을 하기 위해.. 배운다 노드..제이에스')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}) 