// Manages edit functionality of existing todo instances
import listsManager from '../../application_state_logic/all_lists_manager/lists_manager.js';
import selectionTracker from '../../application_state_logic/selection_tracker/selection_tracker.js';
import storageManager from '../../application_state_logic/storage_management/storage_manager.js';
import todoCustomizer from '../item_customizer_panes/todo_customizer.js';
import selectiveTodosUpdater from '../selective_items_updater/todo_UI_updater.js';

// Manages edit functionality of existing list instances
let todoEditController = function () {
    const completeCustomizerPaneFunctionality = () => {
        let editCustomizerPane = todoCustomizer.createCustomizerPane();

        let h2 = todoCustomizer.getHeading(editCustomizerPane);
        h2.textContent = "Edit todo";

        let saveButton = document.createElement('button');
        saveButton.classList.add('list', 'edit');
        saveButton.textContent = 'Save Edit';

        saveButton.addEventListener('click', () => {
            editTodo(editCustomizerPane);
            todoCustomizer.hideCustomizerPane(editCustomizerPane);
        });

        editCustomizerPane.append(saveButton);

        return editCustomizerPane;
    };

    let todoEditCustomizerPane = completeCustomizerPaneFunctionality();
    let container = document.querySelector('body');
    container.append(todoEditCustomizerPane);
    todoCustomizer.hideCustomizerPane(todoEditCustomizerPane);

    let fillForm = (todo) => {
        let { nameInput, dateInput, priorityInput } = todoCustomizer.getFormInputs(todoEditCustomizerPane);

        nameInput.value = todo.getName();
        dateInput.value = todo.getScheduleDate();
        priorityInput.value = todo.getPriority();
    };

    let editTodo = (editCustomizerPane) => {
        let { nameInput, dateInput, priorityInput, listInput } = todoCustomizer.getFormInputs(todoEditCustomizerPane);
        let todoToEdit = selectionTracker.getSelectedTodo();
        todoToEdit.setName(nameInput.value);
        todoToEdit.setScheduleDate(dateInput.value);
        todoToEdit.setPriority(priorityInput.value);
        let selectedListName = listInput.value;
        let listMatchingName = listsManager.getLists().find(list => list.getName() === selectedListName);

        let listMismatch = listMatchingName !== selectionTracker.getSelectedList();
        // Check if current list is default list because if so then addition of a todo from any different list is allowed - This is what "All" list is for
        let isCurrListNotDefault = selectionTracker.getSelectedList() != listsManager.getList(0);

        const moveTodoToNewList = () => {
            // Delete todo where it is in old list before losing information about old list
            let oldList = selectionTracker.getListOfTodo(todoToEdit);
            oldList.removeTodo(todoToEdit);

            // Remove in list that used to contain it and add to new list
            listMatchingName.addTodo(todoToEdit);
        };
        
        // This emphasizes there is no need to edit a display if it will be removed
        const editDisplayWithoutRemoval = () => {
            let selectedTodoIndex = selectionTracker.getSelectedTodoInUIIndex();
            let selectedTodo = selectionTracker.getSelectedTodo();
            // Update in UI with details of edited todo in application state
            selectiveTodosUpdater.editTodoDisplay(selectedTodoIndex, selectedTodo);
            todoCustomizer.hideCustomizerPane(editCustomizerPane);
        };

        const removeDisplay = () => {
            // Get index of todo in current list where it is in UI for removal in UI
            let currentList = selectionTracker.getSelectedList();
            let indexOfUITodo = currentList.getTodos().indexOf(todoToEdit);
            selectiveTodosUpdater.removeTodoDisplay(indexOfUITodo);
        };

        if (listMismatch && isCurrListNotDefault) {
            removeDisplay();
            moveTodoToNewList();
        } else {
            moveTodoToNewList();
            editDisplayWithoutRemoval();
        }

        storageManager.saveChanges();
    };

    let getCustomizerPane = () => todoEditCustomizerPane;

    return { fillForm, getCustomizerPane, editTodo };
}();

export default todoEditController;