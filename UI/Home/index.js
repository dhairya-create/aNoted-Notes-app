const notes = [];
const desc = ["dhairya","parshwa","jenish","mishel","shery","raj","kalp","rohan"];
function onloadFun(){
    const div = document.getElementById("cards");
    const childDiv = document.createElement("div");
    childDiv.className="childDiv";
    for(let i=0; i<8; i++){
        const h4 = document.createElement("h4");
        h4.id = i;
        h4.onclick = function() { 
            sessionStorage.setItem("title",h4.innerHTML);
            sessionStorage.setItem("desc",desc[h4.id]);
            console.log(sessionStorage.getItem("title"));
            console.log(sessionStorage.getItem("desc"));
            window.location.href="../viewNotes/notes.html";
        };
        h4.innerHTML = "Notes" + i;
        childDiv.appendChild(h4);
        notes[i] = h4.innerHTML;
    }
    div.appendChild(childDiv);
}
function search(){
    var flag = 0;
    const val = document.getElementById("search");
    const childDiv = document.createElement("div");
    childDiv.className="childDiv";

    if(val.value!=""){
        for(let i=0;i<notes.length;i++){
            if(val.value == notes[i]){
                const h4 = document.createElement("h4");
                h4.innerHTML = notes[i];
                h4.id = i;
                h4.onclick = function() { 
                    sessionStorage.setItem("title",h4.innerHTML);
                    sessionStorage.setItem("desc",desc[h4.id]);
                    console.log(sessionStorage.getItem("title"));
                    console.log(sessionStorage.getItem("desc"));
                    window.location.href="../viewNotes/notes.html";
                };
                childDiv.appendChild(h4);
                flag = 1;
            }
        }
        if(flag == 1){
            const div = document.getElementById("cards");
            while(div.hasChildNodes())
                div.removeChild(div.firstChild);
            div.appendChild(childDiv);
        }

    }
    else{
        const div = document.getElementById("cards");
        div.removeChild(div.firstChild);
        onload();
    }
}
function toggle(){
    document.getElementById("myDropdown").classList.toggle("show");
}

