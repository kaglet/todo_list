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
        let addCustomizerPane = listCustomizer.createCustomizerPane();

        let h2 = listCustomizer.getHeading(addCustomizerPane);
        h2.textContent = "Add list";

        let saveButton = document.createElement('button');
        saveButton.classList.add('list', 'add');
        saveButton.textContent = 'Add';

        saveButton.addEventListener('click', () => {
            let { nameInput, colorInput } = listCustomizer.getFormInputs(listAddCustomizerPane);
            let name = nameInput.value.trim();
            let color = colorInput !== null ? colorInput.getAttribute('data-color') : 'transparent';
            console.log("List color is " + color);
            if (listValidator.isInvalidOnCustomAdd(name)) return;

            addCustomList(name, color);
            listCustomizer.hideCustomizerPane(addCustomizerPane);
            showNewList();
        });
    
        addCustomizerPane.append(saveButton);

        return addCustomizerPane;
    };

    let listAddCustomizerPane = completeCustomizerPaneFunctionality();
    let container = document.querySelector('body');
    container.append(listAddCustomizerPane);
    listCustomizer.hideCustomizerPane(listAddCustomizerPane);

    const addQuickList = (name) => {
        // Create list instance and store it
        let list = createList(name);
        listsManager.addList(list);
        console.log(listsManager.getLists());
    };

    const addCustomList = (name, color) => {
        let list = createList(name);
        list.setColor(color);
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

        addQuickList(name);
        showNewList();
    });

    customAddButton.addEventListener('click', () => {
        listCustomizer.showCustomizerPane(listAddCustomizerPane);

        let { nameInput } = listCustomizer.getFormInputs(listAddCustomizerPane);
        nameInput.value = document.querySelector('.addition.list input').value;
    });

    // Before any other lists are added to the UI show the default "All" list
    selectiveListsUpdater.addListDisplay(listsManager.getList(0), 0);

    return { addCustomList };
}();

export default listAddController;