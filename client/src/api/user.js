const axios = require("axios");

const postUser = name =>
  axios
    .post(`/users/`, {
      name
    })
    .then(({ data }) => Promise.resolve(data))
    .catch(error => Promise.reject(error.response.data));

const getUser = id =>
  axios
    .get(`/users/${id}`)
    .then(({ data }) => Promise.resolve(data))
    .catch(error => Promise.reject(error.response.data));

export { postUser, getUser };
