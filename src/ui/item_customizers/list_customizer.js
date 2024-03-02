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
        // TODO: Add components, event listeners, and functionality to dialog pane
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

            lowPriorityOption.setAttribute('value', 'Low');
            mediumPriorityOption.setAttribute('value', 'Medium');
            highPriorityOption.setAttribute('value', 'High');

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

        }

        const combineLabelToInput = function(label, input) {
            label.setAttribute('for', input.getAttribute(id));
            let wrapper = document.createElement('div');
            wrapper.classList.add('wrapper');

            return wrapper.append(label, input);
        };

        let nameInput = createNameInput();
        let nameLabel = document.createElement('label');
        nameLabel.textContent = "Enter list name: ";

        let scheduleDateInput = createScheduleDateInput();
        let scheduleDateLabel = document.createElement('label');
        scheduleDateLabel.textContent = 'Set schedule date: '; 

        let priorityInput = createPriorityInput();
        let priorityLabel = document.createElement('label');
        priorityLabel.textContent = "Enter priority: ";

        let nameWrapper = combineLabelToInput(nameLabel, nameInput);
        nameWrapper.classList.add('name');
        let priorityWrapper = combineLabelToInput(priorityLabel, priorityInput);
        priorityWrapper.classList.add('priority');
        let scheduleDateWrapper = combineLabelToInput(scheduleDateLabel, scheduleDateInput);
        scheduleDateWrapper.classList.add('schedule-date');
        
        pane.append(nameWrapper, priorityWrapper, scheduleDateWrapper);

        // TODO: pane can give getters and setter methods as well since these elements are created inside this component just like the footer etc.
        // Same way it will be done for footer, header modules and them. On creation of them they give off other services they can take on.

        return pane;
    };

    return { hideCustomizerPane, showCustomizerPane, createCustomizerPane };
}();

export default listCustomizer;