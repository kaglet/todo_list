import listsManager from '../../application_state_logic/all_lists_manager/lists_manager.js';
import createTodoPane from '../layout_component_outlines/todo_pane.js';
import todoCustomizer from '../item_customizers/todo_customizer.js';
import selectiveTodosUpdater from '../selective_items_updater/todo_UI_updater.js';
import createTodo from '../../application_state_logic/create_building_blocks/create_todo.js';
import selectionTracker from '../../application_state_logic/selection_tracker/selection_tracker.js';

// Manages addition functionality of new todo instances 
let todoAddController = function() {
    let nameInput = createTodoPane.getNameInput();

    let quickAddButton = createTodoPane.getQuickAddButton(); 
    let customAddButton = createTodoPane.getCustomAddButton();

    // Get containing list for accessing logical addition spot of todos
    const completeCustomizerPaneFunctionality = () => {
        let addCustomizerPane = todoCustomizer.createCustomizerPane();

        let saveButton = document.createElement('button');
        saveButton.classList.add('todo', 'add');
        saveButton.textContent = 'Add';

        saveButton.addEventListener('click', () => {
            addCustomTodo();
            todoCustomizer.hideCustomizerPane(addCustomizerPane);
            selectiveTodosUpdater.addTodoDisplay();
        });
    
        addCustomizerPane.append(saveButton);

        return addCustomizerPane;
    }

    let todoAddCustomizerPane = completeCustomizerPaneFunctionality();
    let container = document.querySelector('body');
    container.append(todoAddCustomizerPane);
    todoCustomizer.hideCustomizerPane(todoAddCustomizerPane);

    const addQuickList = () => {
        let name = nameInput.value;

        let todo = createTodo(name);
        // Store list after creating 
        selectionTracker.getSelectedList().addTodo(todo);
        console.log(selectionTracker.getSelectedList().getTodos());
    };

    const addCustomTodo = () => {
        let {  nameInput, dateInput, priorityInput, listInput } = todoCustomizer.getFormInputs(todoAddCustomizerPane);
        let todo = createList(nameInput.value);
        todo.setScheduleDate(dateInput.value);
        todo.setPriority(priorityInput.value);
        todo.setList(listInput.value);
        selectionTracker.getSelectedList().addTodo(todo);
        console.log(selectionTracker.getSelectedList().getTodos());
    };

    quickAddButton.addEventListener('click', () => {
        // TODO: Use a get name input method on the sidebar not this singular reference here unless it is only needed here but still
        let name = nameInput.value;
        if (name.trim() === "") return;

        addQuickList();
        selectiveTodosUpdater.addTodoDisplay();
    });

    customAddButton.addEventListener('click', () => todoCustomizer.showCustomizerPane(todoAddCustomizerPane));

    return { addCustomTodo };
}();

export default todoAddController;

// TODO: Not yet added to selected todo, and not yet added to UI, just created in isolation.