$(document).ready(() => {
  let lamp = $("#lamp-section")

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
  
  $("#color-change-btn").on('click', colorChange);
})