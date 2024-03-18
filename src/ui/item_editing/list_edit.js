import listsManager from '../../application_state_logic/all_lists_manager/lists_manager.js';
import selectionTracker from '../../application_state_logic/selection_tracker/selection_tracker.js';
import listCustomizer from '../item_customizer_panes/list_customizer.js';
import selectiveListsUpdater from '../selective_items_updater/list_UI_updater.js';

// Manages edit functionality of existing list instances
let listEditController = function() {
    const completeCustomizerPaneFunctionality = () => {
        let editCustomizerPane = listCustomizer.createCustomizerPane();

        let h2 = listCustomizer.getHeading(editCustomizerPane);
        h2.textContent = "Edit todo";

        let saveButton = document.createElement('button');
        saveButton.classList.add('list', 'edit');
        saveButton.textContent = 'Save Edit';

        saveButton.addEventListener('click', () => {
            editList();
            let selectedListIndex = listsManager.getLists().indexOf(selectionTracker.getListToEdit());
            selectiveListsUpdater.editListDisplay(selectedListIndex);
            listCustomizer.hideCustomizerPane(editCustomizerPane);
        });
    
        editCustomizerPane.append(saveButton);

        return editCustomizerPane;
    };

    let listEditCustomizerPane = completeCustomizerPaneFunctionality();
    let container = document.querySelector('body');
    container.append(listEditCustomizerPane);
    listCustomizer.hideCustomizerPane(listEditCustomizerPane);

    const fillForm = (list) => {
        let { nameInput } = listCustomizer.getFormInputs(listEditCustomizerPane);

        nameInput.value = list.getName();
    };

    const editList = () => {
        let { nameInput, colorInput } = listCustomizer.getFormInputs(listEditCustomizerPane);
        let listToEdit = selectionTracker.getListToEdit();
        listToEdit.setName(nameInput.value);
        let color = colorInput !== null ? colorInput.getAttribute('data-color') : 'transparent';
        listToEdit.setColor(color);
        console.log(listsManager.getLists());
    };

    const getCustomizerPane = () => listEditCustomizerPane;

    return { fillForm, getCustomizerPane, editList }
}();

export default listEditController;