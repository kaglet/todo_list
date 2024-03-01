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
        pane.classList.add('hidden');

        // Components are tied to creation of pane and are not able to be referenced before its creation
        let closeAddPaneButton = document.createElement('button');
        closeAddPaneButton.classList.add('list', 'close');
        closeAddPaneButton.textContent = "X";

        // TODO: close the created reference to the pane (so pass a parameter as it is not a unique single pane anymore but dependent on the one created by the factory)
        closeAddPaneButton.addEventListener('click', () => hideCustomizerPane(pane));

        // TODO: Add components, event listeners, and functionality to dialog pane

        pane.append(closeAddPaneButton);

        // TODO: pane can give getters and setter methods as well since these elements are created inside this component just like the footer etc.
        // Same way it will be done for footer, header modules and them. On creation of them they give off other services they can take on.

        return pane;
    };

    return { hideCustomizerPane, showCustomizerPane, createCustomizerPane };
}();

export default listCustomizer;