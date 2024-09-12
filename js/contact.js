document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Get form values
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  const output = document.getElementById("formDetails");


  output.innerHTML = `
  <h3> Form Submitted Successfully with the details below : </h3>
  First Name: ${firstName} <br/>
  Last Name: ${lastName} <br>
  Email: ${email}  <br>
  Phone: ${phone} <br>
  Message: ${message}

  `

});
