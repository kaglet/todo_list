import listsManager from "../../application_state_logic/all_lists_manager/lists_manager";
import createSidebar from "../layout_component_outlines/sidebar";

let listCustomizer = function() {
    const showCustomizerPane = (pane) => {
        pane.showModal();
        pane.classList.remove('hidden');        
    };

    const hideCustomizerPane = (pane) => {
        pane.close();
        pane.classList.add('hidden');
    };

    const createCustomizerPane = () => {
        let pane = document.createElement('dialog');
        pane.classList.add('list');
        
        let heading = document.createElement('h2');

        let closeAddPaneButton = document.createElement('button');
        closeAddPaneButton.classList.add('list', 'close');
        
        let closeAddPaneIcon = document.createElement('i');
        closeAddPaneIcon.classList.add('fa-solid', 'fa-xmark');

        closeAddPaneButton.append(closeAddPaneIcon);

        closeAddPaneButton.addEventListener('click', () => hideCustomizerPane(pane));

        let wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');
        wrapper.append(heading, closeAddPaneButton);
        pane.append(wrapper);

        let form = document.createElement('form');
        pane.append(form);

        const createNameInput = function() {
            // Get name from UI if needed, its not yet saved to logical state
            let alreadyEnteredName = createSidebar.getNameInput().textContent;
            let name = alreadyEnteredName.trim() === "" ? "" : alreadyEnteredName;
            let nameInput = document.createElement('input');
            nameInput.textContent = name;
            nameInput.placeholder = 'Example List Name';
            nameInput.setAttribute('id', 'name');

            return nameInput;
        };

        const giveLabelToInput = function(label, input) {
           label.setAttribute('for', input.getAttribute('id'));
        };

        let nameInput = createNameInput();
        let nameLabel = document.createElement('label');
        nameLabel.textContent = "Enter list name: ";

        giveLabelToInput(nameLabel, nameInput);
        
        form.append(nameLabel, nameInput);
        form.method = "dialog";

        return pane;
    };

    // Getter on factory instance pane's components
    const getFormInputs = function(pane) {
        let nameInput = pane.querySelector('#name');

        return { nameInput };
    };

    const getHeading = function(pane) {
        let h2 = pane.querySelector('h2');

        return h2;
    };

    return { hideCustomizerPane, showCustomizerPane, createCustomizerPane, getFormInputs, getHeading };
}();

export default listCustomizer;