import express from "express";
import path from "path";
import fs from "fs";

const app = express()
const port = 3000


app.get('/', (_req, res) => fs.createReadStream(path.join(__dirname, 'public', 'index.html')).pipe(res))

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})