const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
addBtn.addEventListener('click', function () {
    const taskText = taskInput.value;
    if (taskText ==="") {
        alert("Please write a task first!");
        return;
        
    }
    const li = document.createElement('li');
    li.innerText = taskText;
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add('delete-btn');
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = "";
    deleteBtn.addEventListener('click', function(){
        taskList.removeChild(li);

    });
    li.addEventListener('click', function(e){
        if (e.target != deleteBtn){
            li.classList.toggle('completed');
        }

    });
});