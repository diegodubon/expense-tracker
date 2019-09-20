const axios = require("axios");

const getItems = _ =>
  axios
    .get(`/items/`)
    .then(({ data }) => Promise.resolve(data))
    .catch(error => Promise.reject(error.response.data));

export { getItems };
