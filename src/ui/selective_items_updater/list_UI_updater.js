// add/remove

import listsManager from "../../application_state_logic/all_lists_manager/lists_manager";
import todosMigrator from "../../application_state_logic/todos_migrator/todos_migrator";
import listEditController from "../item_editing/list_editor";
import listCustomizer from "../item_customizers/list_customizer";

let selectiveListsUpdater = function() {
    // Append new list to end of lists with newly added list in logical application state or maybe I do not want to keep track of that
    // This not only adds lists but adds functionality that allows it to call delete, and so I feel this should be separated
    const addListDisplay = () => {
        let wrapper = document.createElement('div');

        let newListIndex = listsManager.getLists().length;
        let newList = listsManager.getList(newListIndex);

        let listDisplay = document.createElement('button');
        listDisplay.textContent = newList.getName();
        listDisplay.setAttribute('data-id', newListIndex);

        let editButton = document.createElement('button');
        let deleteButton = document.createElement('button');

        editButton.textContent = "Edit";
        deleteButton.textContent = "Delete";

        editButton.addEventListener('click', () => {
            /* show dialog, and populate form */
            listCustomizer.showCustomizerPane(listEditController.getCustomizerPane());
            listEditController;
        });
        deleteButton.addEventListener('click', () => {
            let listDisplayID = listDisplay.getAttribute('data-id');
            removeListDisplay(listDisplayID);
            // Get information from UI about which one is clicked to remove (this is the input we cannot mock)
            listsManager.removeList(listDisplayID);
            todosMigrator.migrateListTodos(newList);
        });

        let listsDisplay = document.querySelector('.lists.display');

        wrapper.append(listDisplay, editButton, deleteButton);
        wrapper.classList.add('list', 'display', 'wrapper');
        listsDisplay.append(wrapper);
    };

    // Remove list at selected index but I also have to remove corresponding buttons, so I feel like it is better they are in a wrapper
    const removeListDisplay = (index) => {
        let listDisplayWrappers = [...document.querySelectorAll('.list.display.wrapper')];
        let listDisplays = [...document.querySelectorAll('.list.display')];
        // Update UI display indices of place after left shift from delete
        listDisplayWrappers.splice(index, 1);
        for (let i = index; i < listDisplayWrappers.length; i++) {
            listDisplays[i].setAttribute('data-id', index);
        }
    };

    return { addListDisplay, removeListDisplay };
}();

export default selectiveListsUpdater;

