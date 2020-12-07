const axios = require('axios');

export const httpGet = (url,params) => {
   return axios.get(url,{params})
  .then(function (response) {
    return response.data;
  })
}

