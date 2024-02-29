import listsManager from '../../application_state_logic/all_lists_manager/lists_manager.js';

// Access the same pane, or just show the same logical data on a different pane since its superficial, then on click of save button edit existing instance
// We can use the same pane introduced by the list addition controller

// Manages edit functionality of existing list instances
let listEditController = function() {
    let showEditorButton = document.querySelector('button.list.edit');
    

    const createEditPane = () => {
        // TODO: Editor and addition don't need different panes since actually they are the same
        let pane = document.createElement('dialog');
        pane.classList.add('pane', 'list', 'editor');
        let container = document.querySelector('body');

        container.append(pane);
        pane.classList.add('hidden');

        let closeEditorButton = document.createElement();
        closeEditorButton.addEventListener('click', hideEditPane);

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
}();

export default listEditController;