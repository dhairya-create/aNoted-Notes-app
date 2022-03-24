const notes = [];
function onloadFun(){
    const div = document.getElementById("cards");
    const childDiv = document.createElement("div");
    childDiv.className="childDiv";
    for(let i=0; i<8; i++){
        const h4 = document.createElement("h4");
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
        //console.log(val.value);
        for(let i=0;i<notes.length;i++){
            if(val.value == notes[i]){
                const h4 = document.createElement("h4");
                h4.innerHTML = notes[i];
                childDiv.appendChild(h4);
                flag = 1;
            }
        }
        if(flag == 1){
            const div = document.getElementById("cards");
            while(div.hasChildNodes()){
                div.removeChild(div.firstChild);
            }
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