import listEditController from "../item_adding/list_addition";

let listCustomizer = function() {
    const showAdditionPane = () => {
        pane.showModal();
    };

    const hideAdditionPane = () => {
        pane.close();
    };

    const createCustomizerPane = (saveMode) => {
        let pane = document.createElement('dialog');
        pane.classList.add('pane', 'list', 'addition');
        let container = document.querySelector('body');

        container.append(pane);
        pane.classList.add('hidden');

        // Components are tied to creation of pane and are not able to be referenced before its creation
        closeAddPaneButton = document.createElement('button');
        closeAddPaneButton.classList.add('list', 'close');
        closeAddPaneButton.textContent = "X";
        saveButton = document.createElement('button');
        saveButton.classList.add('list', 'save');
        saveButton.textContent = 'Save';

        closeAddPaneButton.addEventListener('click', hideAdditionPane);

        saveButton.addEventListener('click', () => listEditController.addCustomList());

        // TODO: Add components, event listeners, and functionality to dialog pane

        pane.append(closeAddPaneButton, saveButton);

        // TODO: pane can give getters and setter methods as well since these elements are created inside this component just like the footer etc.
        // Same way it will be done for footer, header modules and them. On creation of them they give off other services they can take on.

        return pane;
    };

    let pane = createCustomizerPane();

    return { hideAdditionPane, showAdditionPane };
}();

export default listCustomizer;