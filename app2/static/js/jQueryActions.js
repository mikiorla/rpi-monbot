
// $("#buttonUP").on('touchstart click', setON());
// $(document).ready(function(){ $("#buttonUP").on('touchstart click', setON())});

// $(".button").hover(
//         function(){
//         alert("hover on");
//         },
//         function(){
//             alert("hover bye");
//         });

// $(document).ready(function(){    alert("Hello from jQuery"); })

// var message = "availwidth" + window.screen.availWidth + " width " + window.screen.width;
// alert(message);

//window.location.reload(true)
function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }

$( window ).load(function() {
     // Run code
     var prev = document.getElementById("button-forward").style.background;
     sleep(2000);
    document.getElementById("button-forward").style.background="#28609";
    sleep(2000);
    document.getElementById("button-forward").style.background=prev;
   

  });