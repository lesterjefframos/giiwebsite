function sendEmail (){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "relay@giiph.com",
        Password : "4ADDDBE63A276C4057879AA47FA9063A6669",
        To : 'giitestmail2022@gmail.com',
        From : document.getElementById("email").value,
        Subject : "This is the subject",
        Body : "Name: " + document.getElementById("name").value
        + "<br> Email: " + document.getElementById("email").value
        + "<br> Contact No.: " + document.getElementById("contact").value
        + "<br> Message: " + document.getElementById("message").value
}).then(
  message => alert(message)
    );
}
