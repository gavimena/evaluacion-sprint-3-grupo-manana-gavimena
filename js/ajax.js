//Promises
function requestServer(callbackFn) {
    fetch('https://three-random-reasons-izwfjpgbqm.now.sh')
    .then(function(response){
        return response.json();
     })
    .then(callbackFn);
}
