if (process.env.NODE_ENV === 'developement') {
  require('dotenv/config');
}

const express = require('express');

const app = express();

app.listen(PORT, () => {
  console.log(`Server Running on ${PORT}
`);
});
