let createTodoPane = function() {
    let body = document.querySelector('body');

    let todoPane = document.createElement('section');
    todoPane.classList.add('todo', 'pane');
    todoPane.textContent = 'To do';

    body.append(todoPane);
};

export default createTodoPane;