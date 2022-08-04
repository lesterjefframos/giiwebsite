function sendEmail (){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "giitestmail2022@gmail.com",
        Password : "P@ss1234",
        To : "giitestmail2022@gmail.com",
        From : document.getElementById("email").value,
        Subject : "New Inquiry",
        Body : "Name: " + document.getElementById("name").value
        + "<br> Email: " + document.getElementById("email").value
        + "<br> Contact No.: " + document.getElementById("contact").value
        + "<br> Message: " + document.getElementById("message").value
    }).then (
        message => alert("Message has been sent succesfully!")
    );
}