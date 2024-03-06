import createTodoPane from '../layout_component_outlines/todo_pane.js';
import todoCustomizer from '../item_customizer_panes/todo_customizer.js';
import selectiveTodosUpdater from '../selective_items_updater/todo_UI_updater.js';
import createTodo from '../../application_state_logic/create_building_blocks/create_todo.js';
import selectionTracker from '../../application_state_logic/selection_tracker/selection_tracker.js';

// Manages addition functionality of new todo instances 
let todoAddController = function() {
    let nameInput = createTodoPane.getNameInput();

    let quickAddButton = createTodoPane.getQuickAddButton(); 
    let customAddButton = createTodoPane.getCustomAddButton();

    const completeCustomizerPaneFunctionality = () => {
        let addCustomizerPane = todoCustomizer.createCustomizerPane();

        let saveButton = document.createElement('button');
        saveButton.classList.add('todo', 'add');
        saveButton.textContent = 'Add';

        saveButton.addEventListener('click', () => {
            addCustomTodo();
            todoCustomizer.hideCustomizerPane(addCustomizerPane);
            let listOfTodo = selectionTracker.getSelectedList();
            let newTodoIndex = listOfTodo.getTodos().length - 1;
            selectiveTodosUpdater.addTodoDisplay(newTodoIndex);
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

        // Create todo instance and store it
        let todo = createTodo(name);
        selectionTracker.getSelectedList().addTodo(todo);
        console.log(selectionTracker.getSelectedList().getTodos());
    };

    const addCustomTodo = () => {
        let {  nameInput, dateInput, priorityInput, listInput } = todoCustomizer.getFormInputs(todoAddCustomizerPane);
        let todo = createTodo(nameInput.value);
        todo.setScheduleDate(dateInput.value);
        todo.setPriority(priorityInput.value);

        selectionTracker.getSelectedList().addTodo(todo);
        console.log(selectionTracker.getSelectedList().getTodos());
    };

    quickAddButton.addEventListener('click', () => {
        let name = nameInput.value;
        if (name.trim() === "") return;

        addQuickList();
        let listOfTodo = selectionTracker.getSelectedList();
        let newTodoIndex = listOfTodo.getTodos().length - 1;
        selectiveTodosUpdater.addTodoDisplay(newTodoIndex);
    });

    customAddButton.addEventListener('click', () => todoCustomizer.showCustomizerPane(todoAddCustomizerPane));

    return { addCustomTodo };
}();

export default todoAddController;