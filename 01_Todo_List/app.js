var todoList = document.getElementById('todo_list');

function addTodo() {
    var inputValue = document.getElementById('todo_input');

    if (inputValue.value === '') {
        alert('Please enter a todo item');
        return;
    }

    var todoItem = `<div class="todo_item">
            <p>${inputValue.value}</p>

            <button id="delete_todo_btn" onclick="deleteTodo(this)">Delete</button>
            <button id="edit_todo_btn" onclick="editTodo(this)">Edit</button>
        </div>`

    todoList.innerHTML += todoItem;
    inputValue.value = '';

}

function deleteTodo(button) {
    button.parentElement.remove();
}

function editTodo(button) {

    var parentDiv = button.parentElement;
    var paragraph = parentDiv.querySelector("p");

    var currentText = paragraph.innerText;

    var newValue = prompt("Edit your todo:", currentText);

    if (newValue === null || newValue.trim() === "") {
        return;
    }

    paragraph.innerText = newValue;
}