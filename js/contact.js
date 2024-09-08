document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Get form values
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  // Here, you can add your logic to send the form data to a backend server
  alert(`Form Submitted Successfully with for details below :
  ${firstName}
  ${lastName}
  ${email}
  ${phone}
  ${message}

  
  `);
});
