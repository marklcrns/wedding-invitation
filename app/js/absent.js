var marquee = document.querySelector('#marquee');
var text = "orry to hear you're not coming :(";
var textlen = text.length;
var i = -1;
var time = setInterval(myfunc,50);

function myfunc(){
  i++;
  marquee.innerHTML += text.charAt(i);
}



