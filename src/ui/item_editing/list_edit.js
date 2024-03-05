import listsManager from '../../application_state_logic/all_lists_manager/lists_manager.js';
import selectionTracker from '../../application_state_logic/selection_tracker/selection_tracker.js';
import listCustomizer from '../item_customizers/list_customizer.js';
import selectiveListsUpdater from '../selective_items_updater/list_UI_updater.js';

// Manages edit functionality of existing list instances
let listEditController = function() {
    const completeCustomizerPaneFunctionality = () => {
        let editCustomizer = listCustomizer.createCustomizerPane();

        let saveButton = document.createElement('button');
        saveButton.classList.add('list', 'edit');
        saveButton.textContent = 'Save Edit';

        saveButton.addEventListener('click', () => {
            editList();
            let selectedListIndex = selectionTracker.getSelectedList();
            selectiveListsUpdater.editListDisplay(selectedListIndex);
            listCustomizer.hideCustomizerPane(editCustomizer);
        });
    
        editCustomizer.append(saveButton);

        return editCustomizer;
    }

    let listEditCustomizerPane = completeCustomizerPaneFunctionality();
    let container = document.querySelector('body');
    container.append(listEditCustomizerPane);
    listCustomizer.hideCustomizerPane(listEditCustomizerPane);

    let fillForm = (list) => {
        let { nameInput } = listCustomizer.getFormInputs(listEditCustomizerPane);

        nameInput.value = list.getName();
    };

    let editList = () => {
        let { nameInput } = listCustomizer.getFormInputs(listEditCustomizerPane);
        let selectedListIndex = selectionTracker.getSelectedList();
        let listToEdit = listsManager.getList(selectedListIndex);
        listToEdit.setName(nameInput.value);
        console.log(listsManager.getLists());
    };

    let getCustomizerPane = () => listEditCustomizerPane;

    return { fillForm, getCustomizerPane, editList }
}();

export default listEditController;