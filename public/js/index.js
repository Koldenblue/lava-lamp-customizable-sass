

$(document).ready(() => {
  let lamp = $("#lamp-section")
  let gifBtn = $("#lava-gif-button");
  let gifDiv = $("#lava-gif");
  const colorChange = () => {
    if (lamp.attr('class') === 'purple-lamp') {
      lamp.attr('class', 'green-lamp');
    }
    else if (lamp.attr('class') === 'green-lamp') {
      lamp.attr('class', 'blue-lamp');
    }
    else if (lamp.attr('class') === 'blue-lamp') {
      lamp.attr('class', 'purple-lamp');
    }
  }
  
  const getGif = () => {
    $.get('/api/lavagif').then(data => {
      console.log(data);
      let gif = data.data[0].images.original.url;
      gifDiv.html(`<img src=${gif}>`)
    })


  }

  $("#color-change-btn").on('click', colorChange);
  gifBtn.on("click", getGif);
})