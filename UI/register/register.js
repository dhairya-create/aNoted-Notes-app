document.querySelector(".submit-btn").addEventListener('click',addUser)

async function addUser(e) {
    e.preventDefault()
    let obj = {}

    obj.first_name = document.getElementById("firstName").value;
    obj.last_name = document.getElementById("lastName").value;
    obj.email = document.getElementById("email").value;
    obj.username = document.getElementById("username").value;
    obj.password = document.getElementById("password").value;
    const data=[];
    if(obj.first_name!="" && obj.last_name!="" && obj.email!="" && obj.username!="" && obj.password!=""){  
        let res = await postRequest("http://localhost:5000/users/register",obj)
        console.log(res)
        window.alert("next");
        // window.location.href="../home/login.html";
    }
}

var postRequest = async(url,obj)=>{
    console.log(obj)
    let body = JSON.stringify(obj)
    let result = await fetch(url, {
        method: 'POST',
        body:body,
        headers: {
            "Content-Type": 'application/json',
            "Accept": 'application/json'
        },
        });
        let res = await result.json()
        return res
}