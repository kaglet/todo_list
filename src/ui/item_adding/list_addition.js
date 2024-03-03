import createList from '../../application_state_logic/create_building_blocks/create_list.js';
import listsManager from '../../application_state_logic/all_lists_manager/lists_manager.js';
import createSidebar from '../layout_component_outlines/sidebar.js';
import listCustomizer from '../item_customizers/list_customizer.js';

// Manages addition functionality of new list instances 
let listAddController = function() {
    let nameInput = createSidebar.getNameInput();

    let quickAddButton = createSidebar.getQuickAddButton(); // TODO: call a get quick add button from where its created in DOM for maintainability
    let customAddButton = createSidebar.getCustomAddButton();

    const completeCustomizerPaneFunctionality = () => {
        let addCustomizer = listCustomizer.createCustomizerPane();

        let saveButton = document.createElement('button');
        saveButton.classList.add('list', 'add');
        saveButton.textContent = 'Add';

        // The extension includes completing the save functionality being filled in not just attached.
        saveButton.addEventListener('click', () => listAddController.addCustomList()); // TODO: use listEditController.editList(); for edit existing list on save
    
        addCustomizer.append(saveButton);

        return addCustomizer;
    }

    let listAddCustomizerPane = completeCustomizerPaneFunctionality();
    let container = document.querySelector('body');
    container.append(listAddCustomizerPane);
    listCustomizer.hideCustomizerPane(listAddCustomizerPane);

    const addQuickList = () => {
        let name = nameInput.textContent;
        if (name.trim() === "") return;

        let list = createList(name);
        // Store list after creating 
        listsManager.addList(list);
    };

    const getFormDetails = () => {
        let name; // TODO: extract from form expected (if shared then share) and add these details for saving, we'll make the responsibility of the pane itself to get its details and then deconstruct them here
        // whether the pane happens to be shared with other things doesn't matter so much to this module. It only cares about deconstructed results expected from pane.
        return { name };
    };

    const addCustomList = () => {
        let { name } = getFormDetails();
        let list = createList();
        list.setName(name);
        listsManager.addList(list);
    };

    quickAddButton.addEventListener('click', addQuickList);
    customAddButton.addEventListener('click', () => listCustomizer.showCustomizerPane(listAddCustomizerPane));

    return { addCustomList };
}();

export default listAddController;

// TODO: Whatever is altered in subtask edit view is edited at that selected index (good performance from selection tracker being used as always a linear search time)