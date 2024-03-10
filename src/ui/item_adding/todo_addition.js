import createTodoPane from '../layout_component_outlines/todo_pane.js';
import todoCustomizer from '../item_customizer_panes/todo_customizer.js';
import selectiveTodosUpdater from '../selective_items_updater/todo_UI_updater.js';
import createTodo from '../../application_state_logic/create_building_blocks/create_todo.js';
import selectionTracker from '../../application_state_logic/selection_tracker/selection_tracker.js';
import listsManager from '../../application_state_logic/all_lists_manager/lists_manager.js';
import listValidator from '../validation/list_validation.js';

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
            let {  nameInput, dateInput, priorityInput, listInput } = todoCustomizer.getFormInputs(todoAddCustomizerPane);
            let name = nameInput.value;
            let date = dateInput.value;
            let priority = priorityInput.value;
            let list = listsManager.getList(listInput.selectedIndex);

            if (listValidator.isValidOnCustomAdd(name, date)) return;

            addCustomTodo(name, date, priority, list);
            todoCustomizer.hideCustomizerPane(addCustomizerPane);
            let listOfTodo = selectionTracker.getSelectedList();
            let newTodoIndex = listOfTodo.getTodos().length - 1;
            let newTodo = listOfTodo.getTodo(newTodoIndex, newTodoIndex);
            selectiveTodosUpdater.addTodoDisplay(newTodo);
        });
    
        addCustomizerPane.append(saveButton);

        return addCustomizerPane;
    }

    let todoAddCustomizerPane = completeCustomizerPaneFunctionality();
    let container = document.querySelector('body');
    container.append(todoAddCustomizerPane);
    todoCustomizer.hideCustomizerPane(todoAddCustomizerPane);

    const addQuickList = (name) => {
        // Create todo instance and store it
        let todo = createTodo(name, selectionTracker.getSelectedList());
        console.log(selectionTracker.getSelectedList());
        selectionTracker.getSelectedList().addTodo(todo);
        console.log(selectionTracker.getSelectedList().getTodos());
    };

    const addCustomTodo = (name, date, priority, list) => {
        // Create todo instance and store it
        let todo = createTodo(name, list);
        console.log('List of custom created todo: ' + list);
        todo.setScheduleDate(date);
        todo.setPriority(priority);
        selectionTracker.getSelectedList().addTodo(todo);
        console.log(selectionTracker.getSelectedList().getTodos());
    };

    quickAddButton.addEventListener('click', () => {
        let name = nameInput.value;
        if (listValidator.isValidOnQuickAdd(name)) return;

        addQuickList(name);
        let listOfTodo = selectionTracker.getSelectedList();
        let newTodoIndex = listOfTodo.getTodos().length - 1;
        let newTodo = listOfTodo.getTodo(newTodoIndex);
        selectiveTodosUpdater.addTodoDisplay(newTodo, newTodoIndex);
    });

    customAddButton.addEventListener('click', () => todoCustomizer.showCustomizerPane(todoAddCustomizerPane));

    return { addCustomTodo };
}();

export default todoAddController;