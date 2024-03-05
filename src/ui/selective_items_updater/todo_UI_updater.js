// add/remove
import listsManager from "../../application_state_logic/all_lists_manager/lists_manager";
import todosMigrator from "../../application_state_logic/todos_migrator/todos_migrator";
import selectionTracker from "../../application_state_logic/selection_tracker/selection_tracker";
import todoCustomizer from "../item_customizers/todo_customizer";
import todoEditController from "../item_editing/todo_edit";

let selectiveTodoUpdater = function() {
    let todosDisplay = document.querySelector('.todos.display');
    
    const getListOfTodo = () => {
        let selectedListIndex = selectionTracker.getSelectedList();
        let selectedList = listsManager.getList(selectedListIndex);

        return selectedList;
    };

    const addTodoDisplay = () => {
        let wrapper = document.createElement('div');

        let listOfTodo = selectionTracker.getSelectedList();
        let newTodoIndex = listOfTodo.getTodos().length - 1;
        let newTodo = listOfTodo.getTodo(newTodoIndex);

        let todoItem = document.createElement('button');
        todoItem.textContent = newTodo.getName();
        todoItem.setAttribute('data-id', newTodoIndex);
        todoItem.classList.add('todo', 'item');

        let editButton = document.createElement('button');
        let deleteButton = document.createElement('button');

        editButton.textContent = "Edit";
        deleteButton.textContent = "Delete";

        editButton.addEventListener('click', () => {
            let todoDisplayID = todoItem.getAttribute('data-id');
            todoCustomizer.showCustomizerPane(listEditController.getCustomizerPane());
            // For completing edit set selected list in UI, for use later
            selectionTracker.setSelectedTodo(todoDisplayID);
            todoEditController.fillForm(getListOfTodo().getTodo(todoDisplayID));
        });
        deleteButton.addEventListener('click', () => {
            let todoDisplayID = todoItem.getAttribute('data-id');
            removeTodoDisplay(todoDisplayID);
            getListOfTodo().removeTodo(todoDisplayID);
        });

        wrapper.append(todoItem, editButton, deleteButton);
        wrapper.classList.add('todo', 'display', 'wrapper');
        todosDisplay.append(wrapper);
    };

    // Remove list display at selected index
    const removeTodoDisplay = (index) => {
        let todoDisplayWrappers = document.querySelectorAll('.todo.display.wrapper');
        let todoItems = document.querySelectorAll('.todo.item');
        // Update UI display indices of place after left shift from delete
        todoDisplayWrappers.item(index).remove();

        // Update lists which do not change original reference even if DOM has changed after removal
        todoDisplayWrappers = document.querySelectorAll('.todo.display.wrapper');
        todoItems = document.querySelectorAll('.todo.item');
        for (let i = index; i < todoDisplayWrappers.length; i++) {
            todoItems.item(i).setAttribute('data-id', index);
        }
    };

    // Reflect edits of list item after changes are saved
    const editTodoDisplay = (index) => {
        let todoItems = document.querySelectorAll('.todo.item');
        todoItems.item(index).textContent = getListOfTodo.getTodo(index).getName();
    };

    return { addTodoDisplay, removeTodoDisplay, editTodoDisplay };
}();

export default selectiveTodoUpdater;

