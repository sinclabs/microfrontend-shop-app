import express from "express";
import path from "path";
import fs from 'fs';

const app = express()
const port = 3000

app.use('/static', express.static(path.join(__dirname, 'ui', 'build')))

app.get('/dev', (req, res) => fs.createReadStream(path.join(__dirname, 'index.html')).pipe(res))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})