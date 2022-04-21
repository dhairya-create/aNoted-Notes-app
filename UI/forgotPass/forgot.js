

document.querySelector(".forgot-btn").addEventListener("click",validate)


async function validate(e) {
    e.preventDefault();
    let obj = {}
    obj.email = document.getElementById("email").value;
    if(obj.email!=""){  
        let res = await postRequest("http://localhost:5000/users/forgotPass",obj);
        console.log(res)
        if(!res.error){
            sessionStorage.setItem("otp",res.otp);
            window.location.href="../otpCheck/otp.html";
        }
        else
            alert("Email not registered");
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