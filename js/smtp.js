function sendEmail (){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "relay@giiph.com",
        Password : "Quc32554",
        To : "giitestmail2022@gmail.com",
        From : document.getElementById("email").value,
        Subject : "New Inquiry",
        Body : "Name: " + document.getElementById("name").value
        + "<br> Email: " + document.getElementById("email").value
        + "<br> Contact No.: " + document.getElementById("contact").value
        + "<br> Message: " + document.getElementById("message").value
    }).then (
        message => alert("Message Sent Successfully!")
    );
}