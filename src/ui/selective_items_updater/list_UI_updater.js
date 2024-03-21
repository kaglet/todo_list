// add/remove
import listsManager from "../../application_state_logic/all_lists_manager/lists_manager";
import todosMigrator from "../../application_state_logic/todos_migrator/todos_migrator";
import listEditController from "../item_editing/list_edit";
import listCustomizer from "../item_customizer_panes/list_customizer";
import selectionTracker from "../../application_state_logic/selection_tracker/selection_tracker";
import selectiveTodosUpdater from "./todo_UI_updater";
import createTodoPane from "../layout_component_outlines/todo_pane";

let selectiveListsUpdater = function() {
    let listsDisplay = document.querySelector('.lists.display');
    
    // Append new list to end of lists with newly added list in logical application state or maybe I do not want to keep track of that
    // This not only adds lists but adds functionality that allows it to call delete, and so I feel this should be separated
    const addListDisplay = (newList, newListIndex) => {
        let wrapper = document.createElement('div');

        let colorDisplay = document.createElement('div');
        colorDisplay.classList.add('color', 'display');
        colorDisplay.style.backgroundColor = newList.getColor();

        let listItem = document.createElement('button');
        listItem.textContent = newList.getName();
        listItem.setAttribute('data-id', newListIndex);
        listItem.classList.add('list', 'item');

        listItem.addEventListener('click', () => {
            selectionTracker.setSelectedList(newList);
            selectiveTodosUpdater.clearDisplay();
            selectiveTodosUpdater.showListTodos(newList);
            createTodoPane.setListHeading(newList.getName());
        });

        let editButton = document.createElement('button');
        let deleteButton = document.createElement('button');

        let editIcon = document.createElement('i');
        editIcon.classList.add('fa-solid', 'fa-pen-to-square', 'edit');

        let deleteIcon = document.createElement('i');
        deleteIcon.classList.add('fa-solid', 'fa-trash', 'delete');

        editButton.append(editIcon);
        deleteButton.append(deleteIcon);

        editButton.addEventListener('click', () => {
            listCustomizer.showCustomizerPane(listEditController.getCustomizerPane());
            // For edit set selected list in UI, for use later
            selectionTracker.setListToEdit(newList);
            console.log(selectionTracker.getListToEdit());
            listEditController.fillForm(newList);
        });
        deleteButton.addEventListener('click', () => {
            let listDisplayID = listItem.getAttribute('data-id');
            removeListDisplay(listDisplayID);
            listsManager.removeList(newList);
        });

        wrapper.append(colorDisplay, listItem, editButton);
        if (newListIndex !== 0) {
            wrapper.append(deleteButton);
        }
        wrapper.classList.add('list', 'display', 'wrapper');
        listsDisplay.append(wrapper);
    };

    // Remove list display at selected index
    const removeListDisplay = (index) => {
        let listDisplayWrappers = document.querySelectorAll('.list.display.wrapper');
        let listItems = document.querySelectorAll('.list.item');
        // Update UI display indices of place after left shift from delete
        listDisplayWrappers.item(index).remove();

        // Update lists which do not change original reference even if DOM has changed after removal
        listDisplayWrappers = document.querySelectorAll('.list.display.wrapper');
        listItems = document.querySelectorAll('.list.item');
        for (let i = index; i < listDisplayWrappers.length; i++) {
            listItems.item(i).setAttribute('data-id', index);
        }
    };

    // Reflect edits of list item in UI after changes are saved
    const editListDisplay = (index) => {
        let listItems = document.querySelectorAll('.list.item');
        let editedList = listsManager.getList(index);
        listItems.item(index).textContent = editedList.getName();
        let colorDisplays = document.querySelectorAll('.color.display');
        colorDisplays.item(index).style.backgroundColor = editedList.getColor();
    };

    return { addListDisplay, removeListDisplay, editListDisplay };
}();

export default selectiveListsUpdater;

