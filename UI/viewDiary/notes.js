var desc = sessionStorage.getItem("desc");
var day = sessionStorage.getItem("day")
document.getElementById("content").innerHTML = desc;

document.querySelector(".diary-btn").addEventListener("click", saveNotes)

async function saveNotes(e) {
    e.preventDefault();
    let obj = {}
    obj.username = sessionStorage.getItem("user");
    obj.description = document.getElementById("content").innerHTML;
    obj.diary_date = day;
    if (obj.description != "") {
        let res = await putRequest("http://localhost:5000/diary/updateDiary", obj);
        console.log(res);
        alert("Diary saved!!");
        window.location.href = "../diary/diary.html";
    }
    else {
        alert("Description is empty");
    }
}

var putRequest = async (url, obj) => {
    let body = JSON.stringify(obj)

    let result = await fetch(url, {
        method: 'PUT',
        body: body,
        headers: {
            "Content-Type": 'application/json',
            "Accept": 'application/json'
        },
    });
    let res = await result.json();
    return res
}