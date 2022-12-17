let mybackground = +localStorage.getItem('background')
  console.log(mybackground);
  if (mybackground == null) {
    background1();
  }else if (mybackground == 1) {
    background1();
  }else if (mybackground == 2) {
    background2();
  }else if (mybackground == 3) {
    background3();
  }else {
    console.log('background not set');
  }

function background1() {
    localStorage.setItem('background', 1);
    document.querySelector('body').style.backgroundImage = "url('../img/palmretro.jpg')"; 
    console.log("background1");
}

function background2() {
    localStorage.setItem('background', 2);
    document.querySelector('body').style.backgroundImage = "url('../img/agamebackground.jpg')";
    console.log("background2");
}
function background3() {
    localStorage.setItem('background', 3);
    document.querySelector('body').style.backgroundImage = "url('../img/bgamebackground.jpg')";
    console.log("background3");
}