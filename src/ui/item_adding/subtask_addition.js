import createSubtask from "../../application_state_logic/create_building_blocks/create_subtask";
import listsManager from '../../application_state_logic/all_lists_manager/lists_manager.js';

// Manages addition functionality of new subtask instances 
let subtaskAdditionController = function() {
    let addButton = document.querySelector('');

    const addSubtask = () => {
        let name;
        if (name.trim() === "") return;

        createSubtask(name);
    };
    // TODO: Update UI with new subtask block only if one was entered i.e. name (operation should not complete without it)

    addButton.addEventListener('click', addSubtask);
}();