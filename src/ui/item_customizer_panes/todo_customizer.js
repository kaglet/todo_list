import listsManager from "../../application_state_logic/all_lists_manager/lists_manager";
import selectionTracker from "../../application_state_logic/selection_tracker/selection_tracker";
import createTodoPane from "../layout_component_outlines/todo_pane";

let todoCustomizer = function () {
    const showCustomizerPane = (pane, todo) => {
        pane.showModal();
        pane.classList.remove('hidden');
        updateListOptions(pane, todo);
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
        
        let closeAddPaneIcon = document.createElement('i');
        closeAddPaneIcon.classList.add('fa-solid', 'fa-xmark');

        closeAddPaneButton.append(closeAddPaneIcon);

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

            return listSelectInput;
        };

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
    const getFormInputs = (pane) => {
        let nameInput = pane.querySelector('#name');
        let dateInput = pane.querySelector('#schedule-date');
        let priorityInput = pane.querySelector('#priority');
        let listInput = pane.querySelector('#list');

        return { nameInput, dateInput, priorityInput, listInput };
    };

    const updateListOptions = (pane, firstList) => {
        let { listInput } = getFormInputs(pane);

        while (listInput.firstChild) {
            listInput.remove(listInput.lastChild);
        }

        let indexOfRemoval = listsManager.getLists().indexOf(firstList);

        let reorderedList = listsManager.getLists().toSpliced(indexOfRemoval, 1);
        reorderedList.unshift(firstList);
        
        reorderedList.forEach(list => {
            let listOption = document.createElement('option');
            listOption.value = list.getName();
            listOption.textContent = list.getName();
            listInput.append(listOption);
        });
    };

    return { hideCustomizerPane, showCustomizerPane, createCustomizerPane, getFormInputs };
}();

export default todoCustomizer;