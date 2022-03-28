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


    function saveNotes()
    {
        alert("Notes saved!!");
        window.location.href="../home/index.html";
    }