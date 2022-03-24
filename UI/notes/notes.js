
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