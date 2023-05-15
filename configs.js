require('dotenv').config()

module.exports = {
    backendPort : process.env.BACKEND_PORT,
    allowedCors : process.env.ALLOWED_URL_CORS,
    dbUrl : process.env.DB_URL,
    mailHost: process.env.MAIL_HOST,
    mailPort: process.env.MAIL_PORT,
    mailAuthUser: process.env.MAIL_AUTH_USER,
    mailAuthPass: process.env.MAIL_AUTH_PASS,
}
