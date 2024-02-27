import createTodo from '../../application_state_logic/create_building_blocks/create_todo.js';

// TODO: Update DOM as well in this addition controllers
let todoAdditionController = function() {
    let nameInput = document.querySelector('');

    let quickAddButton = document.querySelector('');
    let saveButton = document.querySelector('');

    let showAddPaneButton = document.querySelector('');
    let closeAddPaneButton = document.querySelector('');

    const createAddPane = () => {
        let pane = document.createElement('dialog');
        pane.classList.add('pane', 'list', 'addition');
        let container = document.querySelector('body');

        pane.append(closeAddPaneButton);

        container.append(pane);
        pane.classList.add('hidden');

        return pane;
    };

    let pane = createAddPane();

    const addQuickTodo = () => {
        // Create defaults for todo
        let name = nameInput.textContent;
        if (name.trim() === "") return;

        let todo = createTodo(name); 
        // TODO: Add todo to currently selected list in the application state (so it is to that logically stored list not the UI yet - that is on demand)
    };

    // TODO: Get custom details from editor in order to simply add since role here is addition
    const getFormDetails = () => {
        let name;
        let dueDate;
        let priority;
        return { name, dueDate, priority };
    };

    const addCustomTodo = () => {
        let { name, dueDate, priority } = getFormDetails();
        let todo = createTodo();
        todo.setName(name);
        todo.setDueDate(dueDate);
        todo.setPriority(priority);
        // TODO: Next, store created todo in selected list
    };

    const showAdditionPane = () => {
        pane.classList.remove('hidden');
    };

    const hideAdditionPane = () => {
        pane.classList.add('hidden');
    };

    quickAddButton.addEventListener('click', addQuickTodo);
    saveButton.addEventListener('click', addCustomTodo);

    showAddPaneButton.addEventListener('click', showAdditionPane);
    closeAddPaneButton.addEventListener('click', hideAdditionPane);
}();

// TODO: Not yet added to selected todo, and not yet added to UI, just created in isolation.