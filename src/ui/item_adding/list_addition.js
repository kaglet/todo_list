import createList from '../../application_state_logic/create_building_blocks/create_list.js';
import listsManager from '../../application_state_logic/all_lists_manager/lists_manager.js';

// Manages addition functionality of new list instances 
let listAdditionController = function() {
    let nameInput = document.querySelector('');

    let quickAddButton = document.querySelector(''); // TODO: call a get quick add button from where its created in DOM for maintainability
    let saveButton = document.querySelector('');
    
    let showAddPaneButton = document.querySelector('');
    let closeAddPaneButton = document.querySelector('');

    const createAddPane = () => {
        let pane = document.createElement('dialog');
        pane.classList.add('pane', 'list', 'addition');
        let container = document.querySelector('body');

        container.append(pane);
        pane.classList.add('hidden');

        return pane;
    };

    let pane = createAddPane();

    const addQuickList = () => {
        let name = nameInput.textContent;
        if (name.trim() === "") return;

        let list = createList(name);
        // Store list after creating 
        listManager.addList(list);
    };

    const getFormDetails = () => {
        let name;
        return { name };
    };

    const addCustomList = () => {
        let { name } = getFormDetails();
        let list = createList();
        list.setName(name);
        listManager.addList(list);
    };

    const showAdditionPane = () => {
        pane.classList.remove('hidden');
    };

    const hideAdditionPane = () => {
        pane.classList.add('hidden');
    };

    quickAddButton.addEventListener('click', addQuickList);
    saveButton.addEventListener('click', addCustomList);

    showAddPaneButton.addEventListener('click', showAdditionPane);
    closeAddPaneButton.addEventListener('click', hideAdditionPane);
}();

export default listAdditionController;

// TODO: Simply show created list details (with given name for quick add if there is a staged list) during addition
// There is no way to access edits with customizer pane with this controller
// Call quick add todo with a default name on list creation (or rather not just don't use a name if its not given)
// When customizer pane is brought up it can show created list details (or the list passed through it put simply, to then display that lists details in the shown pane)

// Whatever is altered in subtask edit view is edited at that selected index (good performance from selection tracker being used as always a linear search time)