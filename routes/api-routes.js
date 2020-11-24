const { default: Axios } = require("axios");

require("dotenv").config();

module.exports = function (app) {

  app.get('/api/lavagif', (req, res) => {

    gifSearchLimit=10
    searchGif="lava lamp"
    queryUrl = "https://api.giphy.com/v1/gifs/search?api_key=" + process.env.giphykey + "&q=" + searchGif + "&limit=" + gifSearchLimit + "&offset=0&rating=g&lang=en"
    Axios.get(queryUrl).then(function(data) {
      res.json(data.data)
    }).catch(err =>{
      console.error(err);
      res.status(404).end();
    })
  })

};
