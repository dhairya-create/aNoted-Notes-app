function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    window.getSelection().style.color='red';
    console.log(username);
    if (username == "mishel07" && password == "mishel07") 
    {
        alert("Login successfully");
    }
    if(username!="" && password!="")
    {
        alert("Incorect Username or password");
    }
}