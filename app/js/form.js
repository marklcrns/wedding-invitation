// Wait for the DOM to be ready
$(function() {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("form[id='sheetdb-form']").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      "data[firstname]": "required",
      "data[lastname]": "required",
      "data[contactno]": "required",
    },
    // Specify validation error messages
    messages: {
      "data[firstname]": "Please enter your firstname",
      "data[lastname]": "Please enter your lastname",
      "data[contactno]": "Please enter your phone number",
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
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
          $("#submit-btn").attr("disabled", true);
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
    }
  });
});