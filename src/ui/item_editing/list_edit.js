import listsManager from '../../application_state_logic/all_lists_manager/lists_manager.js';
import selectionTracker from '../../application_state_logic/selection_tracker/selection_tracker.js';
import listCustomizer from '../item_customizers/list_customizer.js';

// Access the same pane, or just show the same logical data on a different pane since its superficial, then on click of save button edit existing instance
// We can use the same pane introduced by the list addition controller

// Manages edit functionality of existing list instances
let listEditController = function() {
    const completeCustomizerPaneFunctionality = () => {
        let addCustomizer = listCustomizer.createCustomizerPane();

        let saveButton = document.createElement('button');
        saveButton.classList.add('list', 'edit');
        saveButton.textContent = 'Save Edit';

        // The extension includes completing the save functionality being filled in not just attached.
        saveButton.addEventListener('click', () => {
            editList();
            listCustomizer.hideCustomizerPane(addCustomizer);
        });
    
        addCustomizer.append(saveButton);

        return addCustomizer;
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