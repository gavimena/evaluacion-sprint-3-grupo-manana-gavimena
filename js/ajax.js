//Server request
var request = new XMLHttpRequest();
request.open('GET', 'https://three-random-reasons-izwfjpgbqm.now.sh');

//Load event when data is ready to use
request.addEventListener('load', printReason);

var grid = document.querySelector('.grid-reasons');

function printReason() {
  var response = request.responseText;
  grid.innerHTML = response;
}

//Send request
request.send();
