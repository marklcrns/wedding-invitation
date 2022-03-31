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
    vaccinated = document.getElementById("vaccinated").checked
    attending = document.getElementById("attending").checked
    form.reset()
    if (vaccinated) {
      if (attending) {
        window.location.replace("thankyou.html");
      } else {
        window.location.replace("absent.html");
      }
    } else {
      window.location.replace("unvaccinated.html");
    }
  });
});
