//env
const dotenv=require('dotenv');
dotenv.config({path:'./.env'})
//fin
const config = {
    user: process.env.USUARIO,
    password: process.env.PASSWORD,
    database: process.env.DB_NAME,
    server: process.env.SERVER,
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000
    },
    options: {
      encrypt: true, // for azure
      trustServerCertificate: true // change to true for local dev / self-signed certs
    }
}
module.exports=config;