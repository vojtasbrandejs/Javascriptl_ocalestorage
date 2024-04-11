let nameinput = document.querySelector(".taskname");
let pointsinput = document.querySelector(".taskpoints");
let taskli = document.querySelector(".taskli");
let addbutton = document.querySelector(".button");


let tasks = JSON.parse(localStorage.getItem('tasks')) || [];


tasks.forEach(function(task, datum) {
    let taskItem = document.createElement("li");
    taskItem.textContent = task.name + " - " + task.points + " points" + " - " + task.date ;
    taskli.appendChild(taskItem);
});


function addtask() {
    let name = nameinput.value.trim();
    let points = pointsinput.value.trim();
    let datum = new Date().toDateString();

    if (name !== "" && points !== "") {
        let task = {
            name: name,
            points: points,
            date: datum
        };
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));

        let taskItem = document.createElement("li");
        taskItem.textContent = task.name + " - " + task.points + " points" + " - " + task.date ;
        taskli.appendChild(taskItem);

        nameinput.value = "";
        pointsinput.value = "";
    } else {
        alert("Please enter both task name and points.");
    }
}

addbutton.addEventListener("click", addtask);
