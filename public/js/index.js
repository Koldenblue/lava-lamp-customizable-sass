

$(document).ready(() => {
  let lamp = $("#lamp-section")
  let gifBtn = $("#lava-gif-button");
  let gifDiv = $("#lava-gif");
  let gifDiv2 = $("#lava-gif-2");


  console.log(window.location.pathname)
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
      let gif2 = data.data[1].images.original.url;
      gifDiv.html(`<img src=${gif} class='lava-gif' alt='lava lamp gif'>`)
      gifDiv2.html(`<img src=${gif2} class='lava-gif' alt='lava lamp gif'>`)
    })
  }

  getGif();

  $("#color-change-btn").on('click', colorChange);
  gifBtn.on("click", getGif);
})