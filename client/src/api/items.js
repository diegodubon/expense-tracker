const axios = require("axios");

const getItems = userId =>
  axios
    .get(`/items/?userId=${userId}`)
    .then(({ data }) => Promise.resolve(data))
    .catch(error => Promise.reject(error.response.data));

const postItem = data =>
  axios
    .post(`/items/`, data)
    .then(({ data }) => Promise.resolve(data))
    .catch(error => Promise.reject(error.response.data));
export { getItems, postItem };
