import createTodo from '../../application_state_logic/create_building_blocks/create_todo.js';
import listsManager from '../../application_state_logic/all_lists_manager/lists_manager.js';
import createTodoPane from '../layout_component_outlines/todo_pane.js';

// Manages addition functionality of new todo instances 
let todoAdditionController = function() {
    let nameInput = createTodoPane.getNameInput();

    let quickAddButton = createTodoPane.getQuickAddButton();
    let saveButton;

    let customAddButton = createTodoPane.getCustomAddButton();
    let closeAddPaneButton;

    const showAdditionPane = () => {
        pane.classList.remove('hidden');
    };

    const hideAdditionPane = () => {
        pane.classList.add('hidden');
    };

    const createAddPane = () => {
        let pane = document.createElement('dialog');
        pane.classList.add('pane', 'todo', 'addition');
        let container = document.querySelector('body');

        container.append(pane);
        pane.classList.add('hidden');

        closeAddPaneButton = document.createElement('button');
        saveButton = document.createElement('button');
        saveButton.classList.add('.todo.save');

        customAddButton.addEventListener('click', showAdditionPane);
        closeAddPaneButton.addEventListener('click', hideAdditionPane);

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

    quickAddButton.addEventListener('click', addQuickTodo);
    saveButton.addEventListener('click', addCustomTodo);
}();

export default todoAdditionController;

// TODO: Not yet added to selected todo, and not yet added to UI, just created in isolation.