var marquee = document.querySelector('#marquee');
var text = "hank you for your RSVP.\nSee you soon!";
var textlen = text.length;
var i = -1;
var time = setInterval(myfunc,50);

function myfunc(){
  i++;
  marquee.innerHTML += text.charAt(i);
}

