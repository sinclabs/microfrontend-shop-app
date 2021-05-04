import express from "express";
import path from "path";

const app = express()
const port = 3000

app.use('/static', express.static(path.join(__dirname, 'components')))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})