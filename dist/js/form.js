$((function(){$("form[id='sheetdb-form']").validate({rules:{"data[firstname]":"required","data[lastname]":"required","data[contactno]":"required"},messages:{"data[firstname]":"Please enter your firstname","data[lastname]":"Please enter your lastname","data[contactno]":"Please enter your phone number"},submitHandler:function(e){e.addEventListener("submit",(t=>{t.preventDefault(),fetch(e.action,{method:"POST",body:new FormData(document.getElementById("sheetdb-form"))}).then((e=>e.json())).then((t=>{attending=document.getElementById("attending").checked,vaccinated=document.getElementById("vaccinated").checked,e.reset(),$("#submit-btn").attr("disabled",!0),attending?vaccinated?window.location.replace("thankyou.html"):window.location.replace("unvaccinated.html"):window.location.replace("absent.html")}))}))}})}));
//# sourceMappingURL=form.js.map