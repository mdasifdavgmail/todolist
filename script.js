document.getElementById('add-btn').addEventListener('click', addTask);

function addTask() {
  const input = document.getElementById('todo-input');
  const taskText = input.value.trim();

  if (taskText !== "") {
    const todoList = document.getElementById('todo-list');
    const li = document.createElement('li');
    const p = document.createElement('p');
    p.textContent = taskText;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('check-btn');
    checkbox.addEventListener('change', () => {
      li.classList.toggle('checked'); 
    });

    const trashBtn = document.createElement('button');
    trashBtn.classList.add('trash-btn');
    trashBtn.innerHTML = '<i class="fa fa-trash"></i>';
    trashBtn.addEventListener('click', () => {
      li.remove();
    });

    li.appendChild(checkbox);
    li.appendChild(p);
    li.appendChild(trashBtn);
    todoList.appendChild(li);
    input.value = '';
  }
}
