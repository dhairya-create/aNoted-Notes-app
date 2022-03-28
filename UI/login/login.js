function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    console.log(username);
    if (username == "mishel07" && password == "mishel07") 
    {
        return true;
    }
    else{
        alert("Incorrect username or password");
        document.getElementById("username").value="";
        document.getElementById("password").value="";
        return false;
    }
}

function signUp(){
    window.location.href="../register/register.html";
}