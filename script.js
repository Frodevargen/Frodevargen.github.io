let build3= document.getElementById("build3"); let build1 = document.getElementById("build1");
let parallax1 = document.getElementById("parallax1");
let section = document.getElementById("section:after");
window.addEventListener('scroll', function(){
  var value = window.scrollY;
  build3.style.top = -value * 0.25 + 'px'; build1.style.top = value * 1.15 + 'px';
    })
var currentcolor = localStorage.getItem('color');
if(currentcolor=="red"){
  document.documentElement.style.setProperty("--color","red");
  console.log("IM RED")
  document.documentElement.style.setProperty("--color2","darkturquoise");

}


let btn1 = document.getElementById('btn1');
btn1.style.display='inline';
btn1.addEventListener('click', function() {
  switch (currentcolor) {
    case "darkturquoise":
    document.documentElement.style.setProperty("--color","red");
    console.log("Im RED")
    document.documentElement.style.setProperty("--color2","darkturquoise");
    currentcolor = "red";
    localStorage.setItem('color',currentcolor);
      break;

    case "red":
      document.documentElement.style.setProperty("--color","darkturquoise");
      console.log("Im Blue")
      document.documentElement.style.setProperty("--color2","red");
      currentcolor = "darkturquoise";
      localStorage.setItem('color',currentcolor);
        break;
    default:
    localStorage.setItem('color','darkturquoise');

  }

});
//This is all thanks to Keylime Pi#5573 a real gamer
