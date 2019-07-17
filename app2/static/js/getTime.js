(function () {

    var gpiostatus = document.getElementById( "gpioStatusID11" );
  
    function updateClock ( somepart ) {
        somepart.innerHTML = new Date().toLocaleTimeString('de-DE');
    }
  
    setInterval(function () {
        updateClock( gpiostatus );
    }, 1000);
  
  }());