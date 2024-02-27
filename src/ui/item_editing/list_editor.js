import listsManager from '../../application_state_logic/all_lists_manager/lists_manager.js';

// Manages edit functionality of existing list instances
let listEditController = function() {
    let showEditorButton = document.querySelector('');
    let closeEditorButton = document.querySelector('');

    const createEditPane = () => {
        let pane = document.createElement('dialog');
        pane.classList.add('pane', 'list', 'editor');
        let container = document.querySelector('body');

        container.append(pane);
        pane.classList.add('hidden');

        return pane;
    };

    let pane = createEditPane();

    const showEditPane = () => {
        // TODO: Create and show dialog with all the inputs and options (basic for now)
        pane.classList.remove('hidden');
    }; 

    const hideEditPane = () => {
        // TODO: Close dialog modal and wipe form inputs
        pane.classList.add('hidden');
    };

    showEditorButton.addEventListener('click', showEditPane);
    closeEditorButton.addEventListener('click', hideEditPane);
}();