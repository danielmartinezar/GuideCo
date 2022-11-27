export default {
    PORT: process.env.PORT || 8080,
    SECRET: process.env.SECRET || "notasecret!",
    DB_HOST: process.env.DB_HOST || "us-cdbr-east-06.cleardb.net",
    DB_PASSWORD: process.env.DB_PASSWORD || "635304aa",
    DB_USER: process.env.DB_USER || "b0a606d0072222",
    DB_NAME: process.env.DB || "heroku_4e47eacb0926f8e",
    ROUTE_PORT:process.env.ROUTE_PORT || 8082,
    PLACE_PORT:process.env.PLACE_PORT || 8083,
    STORE_PORT:process.env.STORE_PORT || 8084,
    AWS_PORT:process.env.AWS_PORT || 8085,
  };
