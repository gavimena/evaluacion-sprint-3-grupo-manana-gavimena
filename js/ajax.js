//Server request
function requestServer(fn) {
    var request = new XMLHttpRequest();
    request.open('GET', 'https://three-random-reasons-izwfjpgbqm.now.sh');

    //Load event when data is ready to use
    // request.addEventListener('load', printReason);
    request.addEventListener('load', fn);

    //Send request
    request.send();
}
