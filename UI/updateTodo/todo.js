var i = 0;
var title=sessionStorage.getItem("title");
var desc=JSON.parse(sessionStorage.getItem("desc"));
console.log(desc);
document.getElementById("todo-title").value = title;
var form = document.getElementById("form-control");


for(let j=0;j<desc.length;j++){
    var div = document.createElement("div");
    var check = document.createElement("input");
    check.type = "checkbox";
    check.className="check";
    check.checked = desc[j].isCheck;
    check.id = i;
    i++;
    text = document.createElement("input");
    text.type = "text";
    text.value = desc[j].task;
    div.appendChild(check);
    div.appendChild(text);
    form.appendChild(div);
    text.onchange=checktext;
    check.onclick=checkChanged;    
}

function checktext(){
    this.previousElementSibling.value=this.value;
    var list = {
        task: this.value,
        isCheck: this.previousElementSibling.checked
    }
    desc[this.previousElementSibling.id] = list;
}

function checkChanged(){
    desc[this.id].isCheck=this.checked;
}

function addTask() {
    var form = document.getElementById("form-control");
    var div = document.createElement("div");

    var check = document.createElement("input");
    check.type = "checkbox";
    check.className="check";
    check.id = i;
    i++;
    text = document.createElement("input");
    text.type = "text";
    text.value = "";
    text.placeholder="Enter your Task"; 
    text.onchange=checktext;
    check.onclick=checkChanged;
    div.appendChild(check);
    div.appendChild(text);
    form.appendChild(div);
}
// document.querySelector(".notes-btn").addEventListener("click",saveNotes)

//     async function saveNotes(e)
//     {
//         e.preventDefault();
//         let obj = {}
//         obj.username=sessionStorage.getItem("user");
//         obj.title = document.getElementById("notes-title").value;
//         obj.description = document.getElementById("content").innerHTML;
//         const data=[];
//         if(obj.title!=""){  
//             let res = await putRequest("http://localhost:5000/notes/updateNotes",obj);
//             console.log(res);
//             alert("Notes saved!!");
//             window.location.href="../home/index.html";
           
//         }   
//         else{
//             alert("Title is empty");
//         }
//     }

//     var putRequest = async(url,obj)=>{
//         let body = JSON.stringify(obj)
        
//         let result = await fetch(url, {
//             method: 'PUT',
//             body:body,
//             headers: {
//                 "Content-Type": 'application/json',
//                 "Accept": 'application/json'
//             },
//             });
//             let res = await result.json();
//             return res
//     }