document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const message = document.getElementById("form-message");
  message.textContent = "Thanks for your message! I’ll get back to you soon.";
  this.reset();
});
