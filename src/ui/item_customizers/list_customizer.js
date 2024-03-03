import listsManager from "../../application_state_logic/all_lists_manager/lists_manager";
import createSidebar from "../layout_component_outlines/sidebar";

let listCustomizer = function() {
    const showCustomizerPane = (pane) => {
        pane.showModal();
    };

    const hideCustomizerPane = (pane) => {
        pane.close();
    };

    const createCustomizerPane = (type) => {
        let pane = document.createElement('dialog');
        pane.classList.add('pane', 'list', 'addition');
        let container = document.querySelector('body');
        container.append(pane);
        pane.close();
        
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

        const createScheduleDateInput = function() {
            let scheduleDate = document.createElement('input');
            scheduleDate.setAttribute('type', 'date');
            let scheduleDateID = 'schedule-date';
            scheduleDate.setAttribute('id', scheduleDateID);

            return scheduleDate;
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

        let scheduleDateInput = createScheduleDateInput();
        let scheduleDateLabel = document.createElement('label');
        scheduleDateLabel.textContent = 'Set schedule date: '; 

        let priorityInput = createPriorityInput();
        let priorityLabel = document.createElement('label');
        priorityLabel.textContent = "Choose priority: ";

        let chooseListInput = createListInput();
        let chooseListLabel = document.createElement('label');
        chooseListLabel.textContent = "Choose list: ";

        giveLabelToInput(nameLabel, nameInput);
        giveLabelToInput(priorityLabel, priorityInput);
        giveLabelToInput(scheduleDateLabel, scheduleDateInput);
        giveLabelToInput(chooseListLabel, chooseListInput);
        
        form.append(nameLabel, nameInput, scheduleDateLabel, scheduleDateInput, priorityLabel, priorityInput, chooseListLabel, chooseListInput);

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