// //Server request
// function requestServer(fn) {
//     var request = new XMLHttpRequest();
//     request.open('GET', 'https://three-random-reasons-izwfjpgbqm.now.sh');
//
//     //Load event when data is ready to use
//     // request.addEventListener('load', printReason);
//     request.addEventListener('load', fn);
//
//     //Send request
//     request.send();
// }

//Promises
var btnMoreReasons = document.querySelector('.btn-more-reasons');

function requestServer() {
    fetch('https://three-random-reasons-izwfjpgbqm.now.sh')
      .then(function(response){
        return response.json();
      })
      .then(function(json){
        var reasons = json.reasons;
        var listHTML = '';
        for (var i = 0; i < reasons.length; i++) {
          listHTML += '<div><h2>' + reasons[i].title + '</h2><p>' + reasons[i].description + '</p></div>';
        }
        var grid += document.querySelector('.grid-reasons');
        grid.innerHTML = listHTML;
      });
}

btnMoreReasons.addEventListener('click' function);
