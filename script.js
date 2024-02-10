document.addEventListener("DOMContentLoaded", function() {
    const addTaskButton = document.getElementById("add-task");
    const newTaskInput = document.getElementById("new-task");
    const taskList = document.getElementById("task-list");

    addTaskButton.addEventListener("click", function() {
        const taskText = newTaskInput.value.trim();

        if (taskText !== "") {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${taskText}</span>
                <button class="delete">Delete</button>
            `;
            taskList.appendChild(li);

            newTaskInput.value = "";
        }
    });

    taskList.addEventListener("click", function(e) {
        if (e.target.classList.contains("delete")) {
            e.target.parentElement.remove();
        }
    });
});
