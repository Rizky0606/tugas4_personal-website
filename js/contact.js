function handleSubmit() {
  let name = document.getElementById("input-name").value;
  let email = document.getElementById("input-email").value;
  let phoneNumber = document.getElementById("input-phonenumber").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("input-message").value;

  if (
    name == "" ||
    email == "" ||
    phoneNumber == "" ||
    subject == "" ||
    message == ""
  ) {
    return alert("Form tidak boleh kosong");
  }
}
