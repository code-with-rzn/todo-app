let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

taskForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const taskText = taskInput.value;
    
    if (taskText.trim() === "") {
        return;
    }
    tasks.push(taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    const taskItem = document.createElement("li");

    taskItem.textContent = taskText;

    const completeButton = document.createElement("button");

    completeButton.textContent = "Complete";

    completeButton.addEventListener("click", function() {
        taskItem.classList.toggle("completed");
    });

    const deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function() {
        taskItem.remove();
    });

    taskItem.appendChild(completeButton);
    taskItem.appendChild(deleteButton);

    taskList.appendChild(taskItem);

    taskInput.value = "";
});
function displayTasks() {

    tasks.forEach(function(task) {
        const taskItem = document.createElement("li");
        taskItem.textContent = task;
        const completeButton = document.createElement("button");
     completeButton.textContent = "Complete";
     completeButton.addEventListener("click", function() {
        taskItem.classList.toggle("completed");
    });
    const deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", function() {

            tasks = tasks.filter(function(item) {
                return item !== task;
            });
        
            localStorage.setItem("tasks", JSON.stringify(tasks));
        
            taskItem.remove();
        
        });

        taskItem.appendChild(deleteButton);


taskItem.appendChild(completeButton);
        taskList.appendChild(taskItem);
 });

}
displayTasks();