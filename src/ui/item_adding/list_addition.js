import createList from '../../application_state_logic/create_building_blocks/create_list.js';
import listsManager from '../../application_state_logic/all_lists_manager/lists_manager.js';
import createSidebar from '../layout_component_outlines/sidebar.js';
import listCustomizer from '../item_customizer_panes/list_customizer.js';
import selectiveListsUpdater from '../selective_items_updater/list_UI_updater.js';
import listValidator from '../validation/list_validation.js';

// Manages addition functionality of new list instances 
let listAddController = function() {
    let nameInput = createSidebar.getNameInput();

    let quickAddButton = createSidebar.getQuickAddButton(); 
    let customAddButton = createSidebar.getCustomAddButton();

    const completeCustomizerPaneFunctionality = () => {
        let addCustomizer = listCustomizer.createCustomizerPane();

        let saveButton = document.createElement('button');
        saveButton.classList.add('list', 'add');
        saveButton.textContent = 'Add';

        saveButton.addEventListener('click', () => {
            let { nameInput } = listCustomizer.getFormInputs(listAddCustomizerPane);
            let name = nameInput.value.trim();
            if (listValidator.isInvalidOnCustomAdd(name)) return;

            addCustomList(name);
            listCustomizer.hideCustomizerPane(addCustomizer);
            showNewList();
        });
    
        addCustomizer.append(saveButton);

        return addCustomizer;
    };

    let listAddCustomizerPane = completeCustomizerPaneFunctionality();
    let container = document.querySelector('body');
    container.append(listAddCustomizerPane);
    listCustomizer.hideCustomizerPane(listAddCustomizerPane);

    const addQuickList = (name) => {
        let name = nameInput.value;
        // Create list instance and store it
        let list = createList(name);
        listsManager.addList(list);
        console.log(listsManager.getLists());
    };

    const addCustomList = (name) => {
        let list = createList(name);
        listsManager.addList(list);
        console.log(listsManager.getLists());
    };

    const showNewList = () => {
        let newListIndex = listsManager.getLists().length - 1;
        let newList = listsManager.getList(newListIndex);
        selectiveListsUpdater.addListDisplay(newList, newListIndex);
    };

    quickAddButton.addEventListener('click', () => {
        let name = nameInput.value;
        if (listValidator.isInvalidOnQuickAdd(name)) return;

        addQuickList();
        showNewList();
    });

    customAddButton.addEventListener('click', () => listCustomizer.showCustomizerPane(listAddCustomizerPane));

    // Before any other lists are added to the UI show the default "All" list
    selectiveListsUpdater.addListDisplay(listsManager.getList(0), 0);

    return { addCustomList };
}();

export default listAddController;