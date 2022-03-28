function createTodo() {
    alert("Todo Created!");
    window.location.href="../home/index.html";
}



function addTask() {
    var form = document.getElementById("form-control");
    var div = document.createElement("div");

    var check = document.createElement("input");
    check.type = "checkbox";
    check.className="check"
    var text = document.createElement("input");
    text.type = "text";
    text.value = "";
    text.placeholder="Enter your Task";


    div.appendChild(check);
    div.appendChild(text);

    form.appendChild(div);


}