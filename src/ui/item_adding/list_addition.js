import createList from '../../application_state_logic/create_building_blocks/create_list.js';
import listsManager from '../../application_state_logic/all_lists_manager/lists_manager.js';
import createSidebar from '../layout_component_outlines/sidebar.js';
import listCustomizer from '../item_customizers/list_customizer.js';
import selectiveListsUpdater from '../selective_items_updater/list_UI_updater.js';

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
        saveButton.addEventListener('click', () => {
            listAddController.addCustomList();
            listCustomizer.hideCustomizerPane(addCustomizer);
            selectiveListsUpdater.addListDisplay();
        }); // TODO: use listEditController.editList(); for edit existing list on save
    
        addCustomizer.append(saveButton);

        return addCustomizer;
    }

    let listAddCustomizerPane = completeCustomizerPaneFunctionality();
    let container = document.querySelector('body');
    container.append(listAddCustomizerPane);
    listCustomizer.hideCustomizerPane(listAddCustomizerPane);

    const addQuickList = () => {
        let name = nameInput.value;
        if (name.trim() === "") return;

        let list = createList(name);
        // Store list after creating 
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
        // TODO: Use a get name input method on the sidebar not this singular reference here unless it is only needed here
        let name = nameInput.value;
        if (name.trim() === "") return;

        addQuickList();
        selectiveListsUpdater.addListDisplay();
    });

    customAddButton.addEventListener('click', () => listCustomizer.showCustomizerPane(listAddCustomizerPane));

    // Add initial list "All" into UI 
    // TODO: Do logical addition here explicitly as well
    selectiveListsUpdater.addListDisplay();

    return { addCustomList };
}();

export default listAddController;

// TODO: Whatever is altered in subtask edit view is edited at that selected index (good performance from selection tracker being used as always a linear search time)