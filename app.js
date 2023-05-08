import express from 'express'

const app = express()
const router = express.Router()

app.use(express.static('public'))

router.get('/', (req, res) => {
  res.sendFile('index.html')
})

app.use(router)
const PORT = 5500
app.listen(PORT, () => console.log(`Server working on port ${PORT}`))