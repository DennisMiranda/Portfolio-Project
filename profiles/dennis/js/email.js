import CONFIG from "/config.js";
emailjs.init(CONFIG.EMAIL_API_KEY);

//Form to contact and submit message
const btn = document.getElementById("submit_contact_form");

//Detect submit event and execute function senEmail
document.getElementById("form").addEventListener("submit", sendEmail);

//Function to sendEmail automatically
function sendEmail(event) {
  event.preventDefault();

  btn.textContent = "Sending...";
  btn.disabled = true;

  const serviceID = "default_service";
  const templateID = "template_458c6k8";

  //Extract form data
  const form = new FormData(event.target);
  const name = form.get("name");
  const email = form.get("email");
  const message = form.get("message");

  //Sent the email with
  emailjs
    .send(serviceID, templateID, {
      to_email: "dennise.miranda.15@gmail.com",
      to_name: "Dennis Miranda",
      from_name: name,
      email,
      message,
    })
    .then(
      () => {
        btn.textContent = "Submit";
        alert("Sent!");
        btn.disabled = false;
      },
      (err) => {
        btn.textContent = "Submit";
        alert(JSON.stringify(err));
        btn.disabled = false;
      }
    );
}
