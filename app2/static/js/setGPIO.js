//document.getElementById("video").focus();
 

window.addEventListener("keydown", event => {
    if (event.keyCode == "38") {
        // alert('Up key pressed');
        setON();
    }
  });
  window.addEventListener("keyup", event => {
    if (event.keyCode == "38") {
        //alert('Up key depressed');
        setOFF();
    }
  });

  window.addEventListener("keydown", event => {
    if (event.keyCode == "37") {
        // alert('Up key pressed');
        setLeft();
    }
  });
  window.addEventListener("keyup", event => {
    if (event.keyCode == "37") {
        //alert('Up key depressed');
        setOFF();
    }
  });

  window.addEventListener("keydown", event => {
    if (event.keyCode == "39") {
        // alert('Up key pressed');
        setRight();
    }
  });
  window.addEventListener("keyup", event => {
    if (event.keyCode == "39") {
        //alert('Up key depressed');
        setOFF();
    }
  });
  window.addEventListener("keydown", event => {
    if (event.keyCode == "40") {
        // alert('Up key pressed');
        setBack();
    }
  });
  window.addEventListener("keyup", event => {
    if (event.keyCode == "40") {
        //alert('Up key depressed');
        setOFF();
    }
  });
  




// document.onkeydown = function(event) {
//     switch (event.keyCode) {
//        case 37:
//             alert('Left key pressed');
//           break;
//        case 38:
//             alert('Up key pressed');
//             //setON();
//           break;
//        case 39:
//             alert('Right key pressed');
//           break;
//        case 40:
//             alert('Down key pressed');
//             //setOFF();
//           break;
//     }
// };



// document.onkeyup = function(event) {
//      switch (event.keyCode) {
//     //    case 37:
//     //         alert('Left key pressed');
//     //       break;
//         case 38:
//             alert = function() {};
//     //         //setON();
//     //       break;
//     //    case 39:
//     //         alert('Right key pressed');
//     //       break;
//     //    case 40:
//     //         alert('Down key pressed');
//     //         //setOFF();
//            break;
//     //}

    
// };




// document.onkeydown = function(event) {
//     if (event.keyCode == '38')
//     {
//         setON()
//         // while (event.keyCode == '38')
//         // {setON();}
//     }
//     else {setOFF()}
    
// }

function setGPIO(){
    var gpiostatus = document.getElementById( "gpioStatusID11" );

    // if (document.getElementById("buttonUp").addEventListener("click", setON));
    // if (document.getElementById("buttonDown").addEventListener("click", setOFF));
}

function setON() {
    var gpiostatus = document.getElementById( "gpioStatusID11" );
    //window.alert("bitton pressed");
    const Http = new XMLHttpRequest();
    const url='/setGPIO/forwardstart';
    Http.open("POST", url);
    Http.send();
    Http.onreadystatechange = (e) => { gpiostatus.innerHTML = Http.responseText }
   }
 function setLeft() {
    var gpiostatus = document.getElementById( "gpioStatusID11" );
    //window.alert("bitton pressed");
    const Http = new XMLHttpRequest();
    const url='/setGPIO/left';
    Http.open("POST", url);
    Http.send();
    Http.onreadystatechange = (e) => { gpiostatus.innerHTML = Http.responseText }
}

function setRight() {
    var gpiostatus = document.getElementById( "gpioStatusID11" );
    //window.alert("bitton pressed");
    const Http = new XMLHttpRequest();
    const url='/setGPIO/right';
    Http.open("POST", url);
    Http.send();
    Http.onreadystatechange = (e) => { gpiostatus.innerHTML = Http.responseText }
}

function setBack() {
  var gpiostatus = document.getElementById( "gpioStatusID11" );
  //window.alert("bitton pressed");
  const Http = new XMLHttpRequest();
  const url='/setGPIO/back';
  Http.open("POST", url);
  Http.send();
  Http.onreadystatechange = (e) => { gpiostatus.innerHTML = Http.responseText }
}




function setOFF() {
    var gpiostatus = document.getElementById( "gpioStatusID11" );
    //window.alert("bitton pressed");
    const Http = new XMLHttpRequest();
    const url='/setGPIO/forwardstop';
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

