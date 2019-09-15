module.exports = {
  dev: {
    PORT: process.env.PORT || 5000,
    NODE_ENV: "development",
    DB_URI:
      process.env.DB_URI ||
      "postgres://hylagfku:WOd63CDTMrEGaEfSZxyIKW-b_athTQsR@salt.db.elephantsql.com:5432/hylagfku"
  }
};
