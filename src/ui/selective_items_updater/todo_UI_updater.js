// add/remove
import listsManager from "../../application_state_logic/all_lists_manager/lists_manager";
import selectionTracker from "../../application_state_logic/selection_tracker/selection_tracker";
import todoCustomizer from "../item_customizer_panes/todo_customizer";
import todoEditController from "../item_editing/todo_edit";

let selectiveTodosUpdater = function() {
    let todosDisplay = document.querySelector('.todos.display');

    const addTodoDisplay = (newTodo, newTodoIndex) => {
        let wrapper = document.createElement('div');

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
            todoCustomizer.showCustomizerPane(todoEditController.getCustomizerPane());
            // For completing edit set selected list in UI, for use later
            selectionTracker.setSelectedTodoIndex(todoDisplayID);
            todoEditController.fillForm(selectionTracker.getSelectedList().getTodo(todoDisplayID));
        });
        deleteButton.addEventListener('click', () => {
            let todoDisplayID = todoItem.getAttribute('data-id');
            removeTodoDisplay(todoDisplayID);
            // Removal is not related by indices anymore
            selectionTracker.getSelectedList().removeTodo(newTodo);
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

    // Reflect edits of specific list item in UI after changes are saved
    const editTodoDisplay = (index) => {
        let todoItems = document.querySelectorAll('.todo.item');
        todoItems.item(index).textContent = selectionTracker.getSelectedList().getTodo(index).getName();
    };

    const clearDisplay = () => {
        while (todosDisplay.firstChild) {
            todosDisplay.removeChild(todosDisplay.lastChild);
        }
    };

    const showListTodos = () => {
        let todosLength = selectionTracker.getSelectedList().getTodos().length;
        let listOfTodo = selectionTracker.getSelectedList();
        let isListDefault = listOfTodo === listsManager.getList(0);
        let defaultListTodos;
        let finalTodosListLength = todosLength;
        
        if (isListDefault) {
            defaultListTodos = listsManager.getList(0).getAllListsTodos();    
            console.log(defaultListTodos);    
            finalTodosListLength = defaultListTodos.length;    
        }

        for (let i = 0; i < finalTodosListLength; i++) {
            let newTodo = isListDefault ? defaultListTodos[i] : listOfTodo.getTodo(i);
            // Pass a todo not an index, it does not have to control the list sourced from
            addTodoDisplay(newTodo, i);
        }
    };

    return { addTodoDisplay, removeTodoDisplay, editTodoDisplay, clearDisplay, showListTodos };
}();

export default selectiveTodosUpdater;

