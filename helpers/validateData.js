const { isEmpty } = require("lodash");
const validateInput = data => {
  let isEmptyObj = false;
  Object.values(data).forEach(key => {
    if (isEmpty(key)) {
      isEmptyObj = true;
    }
  });
  return isEmptyObj;
};

module.exports = validateInput;
