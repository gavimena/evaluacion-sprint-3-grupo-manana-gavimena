//Get elements from HTML
var btnMoreReasons = document.querySelector('.btn-more-reasons');
btnMoreReasons.addEventListener('click', function(){
    requestServer(printReasons)
});

function printReasons(json){
  var reasons = json.reasons;
  var listHTML = '';
  for (var i = 0; i < reasons.length; i++) {
    listHTML += '<div class="reason'+ parseInt(i+1) +'"><h3 class="subtitle-reason">' + reasons[i].title + '</h3><p class="txt-reason">' + reasons[i].description + '</p></div>';
  }
  var grid = document.querySelector('.grid-reasons');
  grid.innerHTML += listHTML;
}
