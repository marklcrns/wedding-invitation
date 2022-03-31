var marquee = document.querySelector('#marquee');
var text = "t's sad to hear you're not attending :(\nThank you for responding.";
var textlen = text.length;
var i = -1;
var time = setInterval(myfunc,50);

function myfunc(){
  i++;
  marquee.innerHTML += text.charAt(i);
}

