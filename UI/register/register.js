async function addUser() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    const data=[];
    if(firstName!="" && lastName!="" && email!="" && username!="" && password!=""){  
        let result = await fetch("http://localhost:5000/users/register", {
        method: 'POST',
        body:JSON.stringify({
            first_name:firstName,
            last_name:lastName,
            email:email,
            username:username,
            password:password,

        }),
        headers: {
            "Content-Type": 'application/json',
            "Accept": 'application/json'
        },
        });
        alert("next");
        result = await result.json();
        console.log(result);
        window.location.href="../home/login.html";
    }
}