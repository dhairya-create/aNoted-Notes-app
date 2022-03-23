function addUser() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    const data=[];
    data.push(firstName,lastName,email,username,password);
    alert(data);
    if(firstName!="" && lastName!="" && email!="" && username!="" && password!=""){
        alert("User registered successfully");
    }
}