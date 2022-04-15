window.onload = async()=>{
    try {
        let res=await fetch("http://localhost:5000/", {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
      
          })
    let data = await res.json()
    console.log(data)
    } catch (error) {
        console.log(error)
    }
}


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