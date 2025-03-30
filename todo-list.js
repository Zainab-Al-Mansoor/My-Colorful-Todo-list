const addButton = document.getElementById('add-btn');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

addButton.addEventListener('click', function() {
    const todoText = todoInput.value.trim();
    
    if (todoText !== '') {
        const todoItem = document.createElement('li');
        todoItem.innerHTML = ` 
            <button onclick="linethrough(this)">✔</button> 
           <span>${todoText}</span> 
            <button onclick="deleteTodo(this)">X</button>
        `;
        todoList.appendChild(todoItem);
        
        // Clear the input field after adding the task
        todoInput.value = '';
    } else {
        alert('Please enter a valid task');
    }
});

function deleteTodo(button) {
    button.parentElement.remove(); // Removes the entire list item (li)
}

function linethrough(button) {
    const todoItem = button.parentElement; // Get the parent <li> element
    const textSpan = todoItem.querySelector('span'); // Select the <span> containing the task text
    
    // Check if the text already has a line-through applied
    if (textSpan.style.textDecoration === 'line-through') {
        // If line-through is applied, remove it
        textSpan.style.textDecoration = 'none';
    } else {
        // If no line-through is applied, apply it
        textSpan.style.textDecoration = 'line-through';
    }
    
    // Optionally, disable the button after clicking it
    button.disabled = true; // Disable the button after marking it as completed

 
}
