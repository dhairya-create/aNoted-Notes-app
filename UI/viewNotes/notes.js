var title=sessionStorage.getItem("title");
var desc=sessionStorage.getItem("desc");
document.getElementById("notes-title").value = title;
document.getElementById("content").innerHTML = desc;

function doBold(){
    var target = document.querySelector("#content");
    var select = window.getSelection().toString();
    let val = target.innerHTML;
    val = val.replace(select,`<span id="bold">${select}</span>`)
    target.innerHTML = val;
    var data=document.getElementById("bold");
    if(data.style.fontWeight!=="bold"){
        data.style.fontWeight="bold";
    }
    else
        data.style.fontWeight="normal";
}

    function doItalic() {
        var target = document.querySelector("#content");
        var select = window.getSelection().toString()
        let val = target.innerHTML;
        val = val.replace(select,`<span id="italic">${select}</span>`)
        target.innerHTML = val;
        var data=document.getElementById("italic");
        if(data.style.fontStyle!=="italic"){
            data.style.fontStyle="italic";
        }
        else
            data.style.fontStyle="";
    }


    function doUnderline() {
        var target = document.querySelector("#content");
        var select = window.getSelection().toString()
        let val = target.innerHTML;
        val = val.replace(select,`<span id="underline">${select}</span>`)
        target.innerHTML = val;
        var data=document.getElementById("underline");
        console.log(data.style.textDecoration);
        if(data.style.textDecoration!=="underline"){
            data.style.textDecoration="underline";
        }
        else
            data.style.textDecoration="";
    }


    async function saveNotes(e)
    {
        e.preventDefault();
        let obj = {}
        obj.username=sessionStorage.getItem("user");
        obj.title = document.getElementById("notes-title").value;
        obj.description = document.getElementById("content").innerHTML;
        const data=[];
        if(obj.title!=""){  
            let res = await postRequest("http://localhost:5000/notes/add",obj);
            console.log(res);
            if(!res.err){
                alert("Notes saved!!");
                window.location.href="../home/index.html";
            }
            else{
                alert("Title already exist");
            }
        }   
        else{
            alert("Title is empty");
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