import listsManager from "../../application_state_logic/all_lists_manager/lists_manager";
import createTodoPane from "../layout_component_outlines/todo_pane";

let todoCustomizer = function () {
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
        pane.classList.add('pane', 'todo');

        let closeAddPaneButton = document.createElement('button');
        closeAddPaneButton.classList.add('list', 'close');
        closeAddPaneButton.textContent = "X";
        closeAddPaneButton.addEventListener('click', () => hideCustomizerPane(pane));
        pane.append(closeAddPaneButton);

        let form = document.createElement('form');
        pane.append(form);

        const createNameInput = function () {
            // Get name from UI if needed, its not yet saved to logical state
            let alreadyEnteredName = createTodoPane.getNameInput().textContent;
            let name = alreadyEnteredName.trim() === "" ? "" : alreadyEnteredName;
            let nameInput = document.createElement('input');
            nameInput.textContent = name;
            nameInput.placeholder = 'Example Todo Name';
            nameInput.setAttribute('id', 'name');

            return nameInput;
        };

        const createPriorityInput = function () {
            let priorityInput = document.createElement('select');
            priorityInput.setAttribute('type', 'select');
            priorityInput.setAttribute('name', 'priorities');
            let priorityInputID = 'priority';
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

        const createListInput = function () {
            let listSelectInput = document.createElement('select');
            listSelectInput.setAttribute('type', 'select');
            listSelectInput.setAttribute('name', 'priorities');
            let listSelectID = 'list';
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

        const createScheduleDateInput = function () {
            let scheduleDate = document.createElement('input');
            scheduleDate.setAttribute('type', 'date');
            let scheduleDateID = 'schedule-date';
            scheduleDate.setAttribute('id', scheduleDateID);

            return scheduleDate;
        };

        const giveLabelToInput = function (label, input) {
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

        let scheduleDateInput = createScheduleDateInput();
        let scheduleDateLabel = document.createElement('label');
        scheduleDateLabel.textContent = 'Set schedule date: ';

        giveLabelToInput(nameLabel, nameInput);
        giveLabelToInput(priorityLabel, priorityInput);
        giveLabelToInput(chooseListLabel, chooseListInput);
        giveLabelToInput(scheduleDateLabel, scheduleDateInput);

        form.append(nameLabel, nameInput, priorityLabel, priorityInput, chooseListLabel, chooseListInput, scheduleDateLabel, scheduleDateInput);
        form.method = "dialog";

        return pane;
    };

    // Getter on factory instance pane's components
    const getFormInputs = function (pane) {
        let nameInput = pane.querySelector('#name');
        let dateInput = pane.querySelector('#schedule-date');
        let priorityInput = pane.querySelector('#priority');
        let listInput = pane.querySelector('#list');

        return { nameInput, dateInput, priorityInput, listInput };
    };

    return { hideCustomizerPane, showCustomizerPane, createCustomizerPane, getFormInputs };
}();

export default todoCustomizer;