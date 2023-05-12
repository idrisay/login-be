const cors = require("cors");
const configs = require("./configs");

const allowedOrigins = [configs.allowedCors];

const setCorsOptions = () => {
  const options = {
    origin: function (origin, callback) {
      if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  };

  return cors(options)
};

module.exports = { setCorsOptions }