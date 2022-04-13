async function addUser() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    const data=[];
    if(firstName!="" && lastName!="" && email!="" && username!="" && password!=""){
        alert("User registered successfully");
        data.push(firstName,lastName,email,username,password);
        (async()=>{
            let result = await fetch("http://localhost:5000/users/register", {
            method: 'POST',
            body:JSON.stringify(data),
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        })
        result = await result.json();
        console.log(result)
        })()

           }
}