//Print reasons from a server
var grid = document.querySelector('.grid-reasons');
var btnMoreReasons = document.getElementById('btn-more-reasons');

btnMoreReasons.addEventListener('click', function() {
    requestServer(printReason);
});

function printReason(evt) {
  console.log(evt);
  var request = evt.currentTarget;
  var response = JSON.parse(request.responseText);
  // var response = request.responseText;
  console.log(response);

  for (var i = 0; i < response.reasons.length; i++) {
      var reason = response.reasons[i];
      grid.innerHTML = reason.title + ' ' + reason.description + '<br/>';
  }

}
