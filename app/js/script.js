var marquee = document.querySelector('#marquee');
var text = "Please reply by\nJune 10th, 2022\nThank you!";
var textlen = text.length;
var i = -1;
var time = setInterval(myfunc,50);

function myfunc(){
  i++;
  marquee.innerHTML += text.charAt(i);
  // if(i == textlen){
  //   clearInterval(time);
  //   marquee.innerHTML = "Thank you for visiting!.";
  // }
}

// Form submission
var form = document.getElementById('sheetdb-form');
form.addEventListener("submit", e => {
  e.preventDefault();
  fetch(form.action, {
      method : "POST",
      body: new FormData(document.getElementById("sheetdb-form")),
  }).then(
      response => response.json()
  ).then((html) => {
    // you can put any JS code here
    alert('success')
  });
});
