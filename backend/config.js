export default {
    PORT: process.env.PORT || 8080,
    SECRET: process.env.SECRET || "notasecret!",
    DB_HOST: process.env.DB_HOST || "containers-us-west-113.railway.app",
    DB_PASSWORD: process.env.DB_PASSWORD || "8S7KMNCatEdQ4O9U1F1w",
    DB_USER: process.env.DB_USER || "root",
    DB_NAME: process.env.DB || "railway",
    MYSQL_PORT:process.env.MYSQL_PORT || 7839,
    MYSQL_HOST:process.env.MYSQL_HOST || "containers-us-west-113.railway.app"
  };