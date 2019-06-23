var axios = require('axios');

var axiosInstance = axios.create({
  baseURL: 'https://vast-shore-74260.herokuapp.com',
  /* other custom settings */
});

module.exports = axiosInstance;