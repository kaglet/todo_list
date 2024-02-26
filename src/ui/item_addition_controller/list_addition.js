import createList from '../../application_state_logic/create_building_blocks/create_list.js';
import listCustomizerController from '../customizer_panes/list_customizer_pane.js';

let listAdditionController = function() {
    let nameInput = document.querySelector('input.list.name');
    let quickAddButton = document.querySelector('button.list.quick.add'); // TODO: call a get quick add button from where its created in DOM for maintainability
    let customAddButton = document.querySelector('button.list.custom.add');
    let showCustomizerButton = document.querySelector('.show.customizer');
    let closeCustomizerButton = document.querySelector('.close.customizer');

    const addQuickList = () => {
        let name = nameInput.textContent;
        if (name.trim() === "") return;

        let list = createList(name);
        // Store list after creating 
        listManager.addList(list);
    };

    const getCustomDetails = () => {
        // TODO: Get custom details from DOM
        let name;
        return { name };
    };

    const addCustomList = () => {
        let { name } = getCustomDetails();
        let list = createList();
        list.setName(name);
        listManager.addList(list);
    };

    quickAddButton.addEventListener('click', addQuickList);
    customAddButton.addEventListener('click', addCustomList);
    showCustomizerButton.addEventListener('click', () => listCustomizerController.showCustomizerPane());
    closeCustomizerButton.addEventListener('click', () => listCustomizerController.hideCustomizerPane());
}();

// TODO: Simply show created list details (with given name for quick add if there is a staged list) during addition
// There is no way to access edits with customizer pane with this controller
// Call quick add todo with a default name on list creation (or rather not just don't use a name if its not given)
// When customizer pane is brought up it can show created list details (or the list passed through it put simply, to then display that lists details in the shown pane)

// Whatever is altered in subtask edit view is edited at that selected index (good performance from selection tracker being used as always a linear search time)