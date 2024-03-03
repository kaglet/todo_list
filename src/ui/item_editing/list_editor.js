import listsManager from '../../application_state_logic/all_lists_manager/lists_manager.js';

// Access the same pane, or just show the same logical data on a different pane since its superficial, then on click of save button edit existing instance
// We can use the same pane introduced by the list addition controller

// Manages edit functionality of existing list instances
let listEditController = function() {
    let showEditorButton = document.querySelector('button.list.edit');

    // TODO: create edit pane and on click of button allow edit

    

    let fillForm = () => {

    };

    let editList = (list) => {

    };

    let getCustomizerPane = () => editCustomizerPane;

    showEditorButton.addEventListener('click', showEditPane);
}();

export default listEditController;