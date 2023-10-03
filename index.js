const Task = document.querySelector('.search_bar');
Task.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
        addTask();
    }
})

function addTask(){
    const Task = document.querySelector('.search_bar');
    const List = document.querySelector('.task_list');
    const Text = Task.value;
    const textOnlyWords = Text.trim();

    if (textOnlyWords !== "") {
        const Item = document.createElement('li');
        Item.innerHTML = `<div style="display:flex">
                            <button class="done" onclick="markAsDone(this)"></button>
                            <p class="taskText" onclick="markAsDone(this.previousElementSibling)">${Text}</p>
                        </div>
                        <button class="delete" onclick="deleteTask(this)"></button>`;
        List.appendChild(Item);
        Task.value = "";
    }

}

function deleteTask(button) {
    const List = document.querySelector('.task_list');
    const Item = button.parentElement;
    List.removeChild(Item);
}

function markAsDone(button) {
    const Text = button.nextElementSibling;

    if (Text.style.textDecoration === "line-through"){
        Text.style.textDecoration = "none";
        Text.style.opacity = "1";
        button.style.backgroundColor = "#fff";
    } else { 
        Text.style.textDecoration = "line-through";
        Text.style.opacity = "0.7";
        button.style.backgroundColor = "rgb(161, 172, 172)";
        button.textContent = "✓";
    }
}

window.addEventListener("load", updatePlaceHolder);
window.addEventListener("resize", updatePlaceHolder);

function updatePlaceHolder() {
    const task = document.querySelector('.search_bar');

    if (window.innerWidth <= 380 && window.innerWidth > 270) {
        task.placeholder = 'Add task';
    } else if (window.innerWidth <= 270) {
        task.placeholder = '';
    } else {
        task.placeholder = 'Add new task';
    }
}