//Get elements from HTML to reasons fn
var btnMoreReasons = document.querySelector('.btn-more-reasons');
btnMoreReasons.addEventListener('click', function(){
    requestServer(printReasons)
});

//Function to print reasons from a server request (Promises)
function printReasons(json){
    var reasons = json.reasons;
    var listHTML = '';
    for (var i = 0; i < reasons.length; i++) {
        listHTML += '<div class="reason'+ parseInt(i+1) +'"><h3 class="subtitle-reason">' + reasons[i].title + '</h3><p class="txt-reason">' + reasons[i].description + '</p></div>';
    }
    var grid = document.querySelector('.grid-reasons');
    grid.innerHTML += listHTML;
}

//add hover property to buttons through javascript
function mouseOver(selector, className) {
    var element = document.querySelector(selector);
    element.classList.add(className);
}

function mouseOut(selector, className) {
    var element = document.querySelector(selector);
    element.classList.remove(className);
}

//add smooth scroll to section hero
document.querySelector('.btn-up').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.btn-menu').scrollIntoView({ behavior: 'smooth' });
});

//add smooth scroll to looking section
document.querySelector('.btn-down').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.insomnia-tips').scrollIntoView({ behavior: 'smooth' });
});
