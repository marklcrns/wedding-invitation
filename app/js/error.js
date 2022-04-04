var marquee = document.querySelector('#marquee');
var text = "n error in RSVP submission has occurred.\n\nPlease contact the coordinators.\n\nSorry for the inconvenience.";
var textlen = text.length;
var i = -1;
var time = setInterval(myfunc,50);

function myfunc(){
  i++;
  marquee.innerHTML += text.charAt(i);
}

