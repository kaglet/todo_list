import createTodo from '../../application_state_logic/create_building_blocks/create_todo.js';
import todoCustomizerController from '../customizer_panes/todo_customizer_pane.js';

let todoController = function() {
    let nameInput = document.querySelector('input.todo.name');
    let quickAddButton = document.querySelector('button.todo.quick.add');
    let customAddButton = document.querySelector('button.todo.custom.add');
    let showCustomizerButton = document.querySelector('.show.customizer');
    let closeCustomizerButton = document.querySelector('.close.customizer');

    const addQuickTodo = () => {
        // Create defaults for todo
        let name = nameInput.textContent;
        if (name.trim() === "") return;

        let todo = createTodo(name); 
        // TODO: Add todo to currently selected list in the application state (so it is to that logically stored list not the UI yet - that is on demand)
    };

    const getCustomDetails = () => {
        // TODO: Get custom details from DOM
        let name;
        let dueDate;
        let priority;
        return { name, dueDate, priority };
    };

    const addCustomTodo = () => {
        let { name, dueDate, priority } = getCustomDetails();
        let todo = createTodo();
        todo.setName(name);
        todo.setDueDate(dueDate);
        todo.setPriority(priority);
        // TODO: Next, store created todo in selected list
    };

    quickAddButton.addEventListener('click', addQuickTodo);
    customAddButton.addEventListener('click', addCustomTodo);
    showCustomizerButton.addEventListener('click', () => todoCustomizerController.showCustomizerPane());
    closeCustomizerButton.addEventListener('click', () => todoCustomizerController.hideCustomizerPane());
}();

export default todoController;