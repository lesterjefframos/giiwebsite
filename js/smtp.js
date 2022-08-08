function sendEmail (){
    Email.send({
        SecureToken : "27baeda1-dfbf-4648-a81f-6fc51e681fb0",
        To : "recruitment@giiph.com",
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