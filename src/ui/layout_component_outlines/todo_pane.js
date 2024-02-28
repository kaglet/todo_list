let createTodoPane = function() {
    let body = document.querySelector('body');

    let todoPane = document.createElement('section');
    todoPane.classList.add('todo', 'pane');

    let headingsWrapper = document.createElement('div');
    headingsWrapper.classList.add('headings', 'wrapper');
    let listHeading = document.createElement('h2');
    // TODO: Get currently selected list heading/name instead of placeholder
    listHeading.textContent = 'ALL';
    let todosHeading = document.createElement('h2');
    todosHeading.textContent = 'TO DOs';
    headingsWrapper.append(listHeading, todosHeading);

    let quickAddBtn = document.createElement('button');
    quickAddBtn.textContent = 'Quick Add';
    let customAddBtn = document.createElement('button');
    customAddBtn.textContent = 'Custom Add';
    let nameInput = document.createElement('input');
    nameInput.setAttribute('placeholder', 'Example Name');

    let todoAdditionWrapper = document.createElement('div');
    todoAdditionWrapper.classList.add('todo', 'addition', 'wrapper');
    todoAdditionWrapper.append(nameInput, quickAddBtn, customAddBtn);

    let todosDisplay = document.createElement('div');

    todoPane.append(headingsWrapper, todoAdditionWrapper, todosDisplay);

    body.append(todoPane);
};

export default createTodoPane;