let addTaskBtn = document.getElementById("addTaskBtn");
let taskInput = document.getElementById("taskInput");
let deadlineInput = document.getElementById("deadlineInput");
let taskList = document.getElementById("taskList");
let searchInput = document.getElementById("searchInput");
let sortBtn = document.getElementById("sortBtn");

// Добавление задачи
addTaskBtn.addEventListener("click", function() {
    let title = taskInput.value.trim();
    let deadline = deadlineInput.value;

    if (title !== "") {
        let newTask = {
            id: Date.now(),
            title: title,
            deadline: deadline,
            done: false
        };
        tasks.push(newTask);
        taskInput.value = "";
        deadlineInput.value = "";
        saveTasks();
        render();
    } else {
        alert("Введите название задачи");
    }
});

// Делигирование
taskList.addEventListener("click", function(event) {
    // Удаление
    if (event.target.tagName === "BUTTON" && event.target.textContent === "Удалить") {
        let li = event.target.closest("li");
        let id = Number(li.dataset.id);
        let index = tasks.findIndex(task => task.id === id);
        if (index !== -1) {
            tasks.splice(index, 1);
            saveTasks();
            render();
        }
    }

    // Переключение статуса
    if (event.target.type === "checkbox") {
        let li = event.target.closest("li");
        let id = Number(li.dataset.id);
        let task = tasks.find(t => t.id === id);
        if (task) {
            task.done = !task.done;
            saveTasks();
            render();
        }
    }
});

// Поиск
searchInput.addEventListener("input", function() {
    let query = searchInput.value.trim().toLowerCase();
    let filtered = tasks.filter(task => task.title.toLowerCase().includes(query));
    render(filtered);
});

// Сортировка по дате
sortBtn.addEventListener("click", function() {
    let sorted = [...tasks];
    sorted.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
    render(sorted);
});

loadTasks();
render();
