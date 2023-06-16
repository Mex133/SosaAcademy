function sendExp(event)
{
    event.preventDefault()
    
    var params =
    {
        nameInput: document.getElementById("nameInput").value,
        phoneInput: document.getElementById("phoneInput").value,
        mailInput: document.getElementById("mailInput").value,
    };

    const serviceID = "service_9wdbj0h";
    const templateID = "template_7za9pun";

    emailjs.send(serviceID,templateID,params).then((res) => {

            document.getElementById("nameInput"),
            document.getElementById("phoneInput"),
            document.getElementById("mailInput"),
            console.log(res);
            alert("your message sent successfully")
    })
    .catch((err) => console.log(err));
}

