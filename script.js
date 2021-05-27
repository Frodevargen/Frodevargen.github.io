let mountain = document.getElementById("mountain"); let road = document.getElementById("road");
window.addEventListener('scroll', function(){
  var value = window.scrollY;
  mountain.style.top = -value * 0.25 + 'px'; road.style.top = value * 1.15 + 'px';
    })
