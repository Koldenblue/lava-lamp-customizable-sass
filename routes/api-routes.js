require("dotenv").config();

module.exports = function (app) {

  app.get('/api/lavagif', (req, res) => {
    console.log(req);

    gifSearchLimit=10
    searchGif="lava lamp"
    queryUrl = "https://api.giphy.com/v1/gifs/search?api_key=" + process.env.giphykey + "&q=" + searchGif + "&limit=" + gifSearchLimit + "&offset=0&rating=g&lang=en"
    $ajax({
      url: queryUrl,
      method: "GET"
    }).then(function(res) {
      console.log(res)
    })
    res.json("hi")
  })

};
