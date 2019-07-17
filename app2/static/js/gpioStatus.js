
(function () {

    var gpiostatus = document.getElementById( "gpioStatusID11" );
  
    function updateGPIO ( somepart ) {
        const Http = new XMLHttpRequest();
        const url='/checkGPIO';
        Http.open("GET", url);
        Http.send();
        Http.onreadystatechange = (e) => { somepart.innerHTML = Http.responseText }
        }
  
    setInterval(function () {
        updateGPIO ( gpiostatus );
    }, 1000);
  
  }());







