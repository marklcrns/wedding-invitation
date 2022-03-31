var marquee = document.querySelector('#marquee');
var text = "ue to health concerns, we are required to be fully vaccinated prior to attending a large gathering.\nPlease contact your local medical facility.\n\nSorry for the inconvenience.";
var textlen = text.length;
var i = -1;
var time = setInterval(myfunc,50);

function myfunc(){
  i++;
  marquee.innerHTML += text.charAt(i);
}

