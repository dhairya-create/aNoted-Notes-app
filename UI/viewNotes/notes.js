var title=sessionStorage.getItem("title");
var desc=sessionStorage.getItem("desc");
document.getElementById("notes-title").value = title;
document.getElementById("content").innerHTML = desc;

// function onload(){
//     console.log(sessionStorage.getItem("title"));
//     console.log(sessionStorage.getItem("desc"));
//     // document.getElementsByClassName("notes-title").value = title;
//     // document.getElementsByClassName("content").innerHTML = desc;
// }   
function doBold(){
    var target = document.querySelector(".content");
    var select = window.getSelection().toString();
    let val = target.innerHTML;
    val = val.replace(select,`<strong>${select}</strong>`)
    target.innerHTML = val;
}

    function doItalic() {
        var target = document.querySelector(".content");
        var select = window.getSelection().toString()
        let val = target.innerHTML;
        val = val.replace(select,`<em>${select}</em>`)
        target.innerHTML = val
    }


    function doUnderline() {
        var target = document.querySelector(".content");
        var select = window.getSelection().toString()
        let val = target.innerHTML;
        val = val.replace(select,`<u>${select}</u>`)
        target.innerHTML = val
    }


    function saveNotes()
    {
        var date = sessionStorage.getItem("date");
        sessionStorage.setItem(date,"true");
        window.location.href="../diary/diary.html";
    }