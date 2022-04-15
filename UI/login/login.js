

document.querySelector(".login-btn").addEventListener("click",validate)

function signUp(){
    window.location.href="../register/register.html";
}

async function validate(e) {
    e.preventDefault();
    let obj = {}
    obj.username = document.getElementById("username").value;
    obj.password = document.getElementById("password").value;
    const data=[];
    if(obj.username!="" && obj.password!=""){  
        let res = await postRequest("http://localhost:5000/users/login",obj);
        console.log(res)
        if(!res.error)
            window.location.href="../Home/index.html";
        else
            alert("Invalid credentials");
    }
}


var postRequest = async(url,obj)=>{
    // console.log(obj)
    let body = JSON.stringify(obj)
    
    let result = await fetch(url, {
        method: 'POST',
        body:body,
        headers: {
            "Content-Type": 'application/json',
            "Accept": 'application/json'
        },
        });
        let res = await result.json();
        return res
}