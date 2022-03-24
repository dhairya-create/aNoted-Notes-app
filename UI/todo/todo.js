function createTodo() {
    alert("Todo Created!");
}



function addTask() {
    var form = document.getElementById("form-control");
    var div = document.createElement("div");

    var check = document.createElement("input");
    check.type = "checkbox";



    var text = document.createElement("input");
    text.type = "text";
    text.value = "";
    text.placeholder="Enter your Task";


    div.appendChild(check);
    div.appendChild(text);

    form.appendChild(div);


}