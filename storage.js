let tasks = [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    let data = localStorage.getItem("tasks");
    if (data !== null) {
        tasks = JSON.parse(data);
    }
}
