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
        pane.classList.add('pane', 'list', 'addition');
        
        let closeAddPaneButton = document.createElement('button');
        closeAddPaneButton.classList.add('list', 'close');
        closeAddPaneButton.textContent = "X";
        closeAddPaneButton.addEventListener('click', () => hideCustomizerPane(pane));
        pane.append(closeAddPaneButton);

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

        const createPriorityInput = function() {
            let priorityInput = document.createElement('select');
            priorityInput.setAttribute('type', 'select');
            priorityInput.setAttribute('name', 'priorities');      
            let priorityInputID =   'priority-select';
            priorityInput.setAttribute('id', priorityInputID);

            let highPriorityOption = document.createElement('option');
            let mediumPriorityOption = document.createElement('option');
            let lowPriorityOption = document.createElement('option');

            lowPriorityOption.setAttribute('value', 'low');
            mediumPriorityOption.setAttribute('value', 'medium');
            highPriorityOption.setAttribute('value', 'high');

            lowPriorityOption.textContent = 'Low';
            mediumPriorityOption.textContent = 'Medium';
            highPriorityOption.textContent = 'High';

            priorityInput.append(lowPriorityOption, mediumPriorityOption, highPriorityOption);

            return priorityInput;
        };

        const createListInput = function() {
            let listSelectInput = document.createElement('select');
            listSelectInput.setAttribute('type', 'select');
            listSelectInput.setAttribute('name', 'priorities');      
            let listSelectID =   'list-select';
            listSelectInput.setAttribute('id', listSelectID);

            // TODO: Create options based on all lists in list manager
            listsManager.getLists().forEach(list => {
                let listOption = document.createElement('option');
                listOption.value = list.getName();
                listOption.textContent = list.getName();
                listSelectInput.append(listOption);
            });

            return listSelectInput;
        }

        const giveLabelToInput = function(label, input) {
           label.setAttribute('for', input.getAttribute('id'));
        };

        let nameInput = createNameInput();
        let nameLabel = document.createElement('label');
        nameLabel.textContent = "Enter list name: ";

        let priorityInput = createPriorityInput();
        let priorityLabel = document.createElement('label');
        priorityLabel.textContent = "Choose priority: ";

        let chooseListInput = createListInput();
        let chooseListLabel = document.createElement('label');
        chooseListLabel.textContent = "Choose list: ";

        giveLabelToInput(nameLabel, nameInput);
        giveLabelToInput(priorityLabel, priorityInput);
        giveLabelToInput(chooseListLabel, chooseListInput);
        
        form.append(nameLabel, nameInput, priorityLabel, priorityInput, chooseListLabel, chooseListInput);
        form.method = "dialog";

        const getFormInputs = function() {
            return { nameInput , scheduleDateLabel, priorityLabel, priorityInput };
        };

        // TODO: pane can give getters and setter methods as well since these elements are created inside this component just like the footer etc.
        // Same way it will be done for footer, header modules and them. On creation of them they give off other services they can take on.

        return pane;
    };

    return { hideCustomizerPane, showCustomizerPane, createCustomizerPane };
}();

export default listCustomizer;