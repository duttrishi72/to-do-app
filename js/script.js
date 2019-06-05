let key = Math.random() * 1000000;
function setData(value) {
    localStorage.setItem(key, value);
    key++;
    document.getElementById("taskInput").value = "";
}
function getData() {
    let opTable = "<table class = 'col-md-12'>"
    for(let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        opTable += "<tr class = 'col-md-12'><td><input style='margin: 5px;' type='checkbox' onchange='toggleCompleted(this, key)'/></td><td class = 'col-md-12' id = 'output'><b>" + localStorage.getItem(key) + "</b></td><td><button class='btn btn-default' style='margin: 10px;' onclick='deleteData(" + key + ")'><span class='glyphicon glyphicon-remove'></span></button></td><td><button style='margin: 5px' onclick='editData(" + key + ")' class='btn btn-secondary'>Edit</button></td></tr>";
    }
    opTable += "</table><br>";
    document.getElementById("toDoList").innerHTML = opTable;
}
function toggleCompleted(checkBoxElement, key) {
    if(checkBoxElement.checked) {
        // localStorage.setItem(key, localStorage.getItem(key) + "c");
        //mark completed for the checked key, can strikethrough 
    } else {
        // localStorage.setItem(key, localStorage.getItem(key) - "c");
        //mark incomplete
    }
}
getData();
function deleteData(key) {
    localStorage.removeItem(key);
    console.log(key);
    if(localStorage.length == 0) {
        document.getElementById("toDoList").innerHTML = "";
    }
    getData();
}
function editData(key) {
    console.log(key);
    let temp2 = document.getElementById("editBar");
    temp2.style.visibility = 'visible';
    let temp = document.getElementById("container");
    temp.style.visibility = 'hidden';
    let editBar = "<form action = 'javascript: updateData(" + key + ")'><div class='input-group col-md-6 col-md-offset-3' id = 'dataEnter'><input type='text' id ='editedTaskInput' class='form-control' placeholder='Enter new task' value = '" + localStorage.getItem(key) + "' autofocus /><span class='input-group-btn'><button class='btn btn-default' onclick='' type='submit'>Update!</button></span></div></form>";
    document.getElementById("editBar").innerHTML = editBar;
}
function updateData(key) {
    let temp2 = document.getElementById("editBar");
    temp2.style.visibility = "hidden";
    let temp = document.getElementById("container");
    temp.style.visibility = "visible";
    console.log(key);
    console.log(taskInput.value);
    localStorage.setItem(key, editedTaskInput.value);
    getData();
}