import axios from "axios";

const getCategories = type => {
  return axios
    .get(`/categories?type=${type}`)
    .then(({ data }) => Promise.resolve(data))
    .catch(error => Promise.reject(error.response.data));
};

export { getCategories };
