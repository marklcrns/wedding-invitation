var marquee = document.querySelector('#marquee');
var text = "orry, we are required to be fully vaccinated first :(";
var textlen = text.length;
var i = -1;
var time = setInterval(myfunc,50);

function myfunc(){
  i++;
  marquee.innerHTML += text.charAt(i);
}


