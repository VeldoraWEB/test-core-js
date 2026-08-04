function updateCounter() {
    let counterElement = document.getElementById("taskCounter");
    let remaining = tasks.filter(task => task.done === false).length;
    counterElement.textContent = "Осталось: " + remaining;
}

function render(list = tasks) {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    for (let i = 0; i < list.length; i++) {
        let li = document.createElement("li");
        li.dataset.id = list[i].id;

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = list[i].done;
        li.appendChild(checkbox);

        let span = document.createElement("span");
        span.textContent = list[i].title;
        li.appendChild(span);

        let delBtn = document.createElement("button");
        delBtn.textContent = "Удалить";
        li.appendChild(delBtn);

        taskList.appendChild(li);
    }

    updateCounter();
}
