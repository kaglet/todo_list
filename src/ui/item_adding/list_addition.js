import createList from '../../application_state_logic/create_building_blocks/create_list.js';
import listsManager from '../../application_state_logic/all_lists_manager/lists_manager.js';
import createSidebar from '../layout_component_outlines/sidebar.js';
import listCustomizer from '../item_customizer_panes/list_customizer.js';
import selectiveListsUpdater from '../selective_items_updater/list_UI_updater.js';

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
            addCustomList();
            listCustomizer.hideCustomizerPane(addCustomizer);
            let newListIndex = listsManager.getLists().length - 1;
            let newList = listsManager.getList(newListIndex);
            selectiveListsUpdater.addListDisplay(newList, newListIndex);
        });
    
        addCustomizer.append(saveButton);

        return addCustomizer;
    };

    let listAddCustomizerPane = completeCustomizerPaneFunctionality();
    let container = document.querySelector('body');
    container.append(listAddCustomizerPane);
    listCustomizer.hideCustomizerPane(listAddCustomizerPane);

    const addQuickList = () => {
        let name = nameInput.value;

        // Create list instance and store it
        let list = createList(name);
        listsManager.addList(list);
        console.log(listsManager.getLists());
    };

    const addCustomList = () => {
        let { nameInput } = listCustomizer.getFormInputs(listAddCustomizerPane);
        let list = createList(nameInput.value);
        listsManager.addList(list);
        console.log(listsManager.getLists());
    };

    quickAddButton.addEventListener('click', () => {
        let name = nameInput.value;
        if (name.trim() === "") return;

        addQuickList();
        let newListIndex = listsManager.getLists().length - 1;
        let newList = listsManager.getList(newListIndex);
        selectiveListsUpdater.addListDisplay(newList, newListIndex);
    });

    customAddButton.addEventListener('click', () => listCustomizer.showCustomizerPane(listAddCustomizerPane));

    // Before any other lists are added to the UI show the default "All" list
    selectiveListsUpdater.addListDisplay(0);

    return { addCustomList };
}();

export default listAddController;