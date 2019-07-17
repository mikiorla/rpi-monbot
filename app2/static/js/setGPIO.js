
function setGPIO(){
    var gpiostatus = document.getElementById( "gpioStatusID11" );

    // if (document.getElementById("buttonUp").addEventListener("click", setON));
    // if (document.getElementById("buttonDown").addEventListener("click", setOFF));
}

function setON() {
    var gpiostatus = document.getElementById( "gpioStatusID11" );
    //window.alert("bitton pressed");
    const Http = new XMLHttpRequest();
    const url='/setGPIO/on';
    Http.open("POST", url);
    Http.send();
    Http.onreadystatechange = (e) => { gpiostatus.innerHTML = Http.responseText }
   }

function setOFF() {
    var gpiostatus = document.getElementById( "gpioStatusID11" );
    //window.alert("bitton pressed");
    const Http = new XMLHttpRequest();
    const url='/setGPIO/off';
    Http.open("POST", url);
    Http.send();
    Http.onreadystatechange = (e) => { gpiostatus.innerHTML = Http.responseText }

}

function buttonPressed() {
    var gpiostatus = document.getElementById( "gpioStatusID11" );
    //window.alert("bitton pressed");
    const Http = new XMLHttpRequest();
    const url='/setGPIO/on';
    Http.open("POST", url);
    Http.send();
    Http.onreadystatechange = (e) => { gpiostatus.innerHTML = Http.responseText }
}

function buttonReleased() {
    var gpiostatus = document.getElementById( "gpioStatusID11" );
    //window.alert("bitton pressed");
    const Http = new XMLHttpRequest();
    const url='/setGPIO/off';
    Http.open("POST", url);
    Http.send();
    Http.onreadystatechange = (e) => { gpiostatus.innerHTML = Http.responseText }
}