console.log(sessionStorage.setItem("favoriteMovie", "Shrek"));
function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "mishel07" && password == "mishel07") 
    {
        window.location.href="../home/index.html";
    }
    else if(username!="" && password!="")
    {
        alert("Incorect Username or password");
    }
    return false;
}

function signUp(){
    window.location.href="../register/register.html";
}