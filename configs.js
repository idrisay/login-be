require('dotenv').config()

module.exports = {
    backendPort : process.env.BACKEND_PORT,
    allowedCors : process.env.ALLOWED_URL_CORS,
    dbUrl : process.env.DB_URL,
}
