const form = document.querySelector('#todo-form');
const input = document.querySelector('#todo-input');
const list = document.querySelector('#todo-list');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    addTodo();
});

function addTodo() {
    const todo = input.value.trim();
    if (todo) {
        const li = document.createElement('li');
        li.innerHTML = `
        <span>${todo}</span>
        <button>delete</button>
        `;
        list.appendChild(li); sa
        input.value = '';
        const deleteButton = li.querySelector('button');
        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
        });
    }
}