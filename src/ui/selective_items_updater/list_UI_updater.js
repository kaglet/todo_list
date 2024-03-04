// add/remove

import listsManager from "../../application_state_logic/all_lists_manager/lists_manager";
import todosMigrator from "../../application_state_logic/todos_migrator/todos_migrator";
import listEditController from "../item_editing/list_edit";
import listCustomizer from "../item_customizers/list_customizer";
import selectionTracker from "../../application_state_logic/selection_tracker/selection_tracker";

let selectiveListsUpdater = function() {
    let listsDisplay = document.querySelector('.lists.display');
    
    // Append new list to end of lists with newly added list in logical application state or maybe I do not want to keep track of that
    // This not only adds lists but adds functionality that allows it to call delete, and so I feel this should be separated
    const addListDisplay = () => {
        let wrapper = document.createElement('div');

        let newListIndex = listsManager.getLists().length - 1;
        let newList = listsManager.getList(newListIndex);

        let listItem = document.createElement('button');
        listItem.textContent = newList.getName();
        listItem.setAttribute('data-id', newListIndex);
        listItem.classList.add('list', 'item');

        let editButton = document.createElement('button');
        let deleteButton = document.createElement('button');

        editButton.textContent = "Edit";
        deleteButton.textContent = "Delete";

        editButton.addEventListener('click', () => {
            let listDisplayID = listItem.getAttribute('data-id');
            listCustomizer.showCustomizerPane(listEditController.getCustomizerPane());
            // For edit set selected list in UI, for use later
            selectionTracker.setSelectedList(listDisplayID);
            listEditController.fillForm(listsManager.getList(listDisplayID));
        });
        deleteButton.addEventListener('click', () => {
            let listDisplayID = listItem.getAttribute('data-id');
            removeListDisplay(listDisplayID);
            // Get information from UI about which one is clicked to remove (this is the input we cannot mock)
            listsManager.removeList(listDisplayID);
            todosMigrator.migrateListTodos(newList);
        });

        wrapper.append(listItem, editButton, deleteButton);
        wrapper.classList.add('list', 'display', 'wrapper');
        listsDisplay.append(wrapper);
    };

    // Remove list at selected index but I also have to remove corresponding buttons, so I feel like it is better they are in a wrapper
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

    return { addListDisplay, removeListDisplay };
}();

export default selectiveListsUpdater;

