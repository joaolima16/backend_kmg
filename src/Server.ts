import app from '../App'
import path from 'path'
import https from 'https'
import fs from 'fs'

require("dotenv").config({path: path.resolve(__dirname, "../.env")})
const port  = process.env.PORT || 443
const config = {
    key: fs.readFileSync("../key.kmg.pem"),
    cert: fs.readFileSync("../kmg.eng.br.pem")
}
const Https = https.createServer(config,app)

Https.listen(port,()=>{
    console.log("Server rodando na porta :" + port)
})