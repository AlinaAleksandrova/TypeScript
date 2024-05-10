interface Task {
    id: number;
    name: string;
}

let tasks: Task[] = [];
let taskId = 1;

function renderTasks() {
    const taskList = document.getElementById("taskList");
    if (taskList) {
        taskList.innerHTML = "";
        tasks.forEach(task => {
            const li = document.createElement("li");
            li.textContent = task.name;
            taskList.appendChild(li);
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskInput = document.getElementById("taskInput") as HTMLInputElement;

    if (addTaskBtn && taskInput) {
        addTaskBtn.addEventListener("click", () => {
            const taskName = taskInput.value.trim();
            if (taskName !== "") {
                const newTask: Task = { id: taskId++, name: taskName };
                tasks.push(newTask);
                renderTasks();
                taskInput.value = "";
            }
        });
    }
});
