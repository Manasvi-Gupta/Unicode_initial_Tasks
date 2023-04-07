function validation()
{
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var phone=document.getElementById("phone").value;
    var error_message=document.getElementById("error_message");
    var text;
    error_message.style.padding="10px";
    if(name.length<3){
        text="Please enter a valid name";
        error_message.innerHTML=text;
        return false;
    }
    if(email.indexOf("@")==-1 ||email.length <6)
    {
        text="Please enter a valid email address";
        error_message.innerHTML=text;
        return false;
    }
    if(isNaN(phone)||phone.length !=10)
    {
        text="Please enter a valid phone no";
        error_message.innerHTML=text;
        return false;
    }
    alert("Form submitted Successfully!!");
    return true;
}