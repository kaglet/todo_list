let todoCustomizerController = function() {
    let showCustomizerButton = document.querySelector('button.todo.customizer.show');
    let closeCustomizerButton = document.querySelector('button.todo.customizer.close');

    const createCustomizerPane = () => {
        let pane = document.createElement('dialog');
        pane.classList.add('pane', 'todo', 'customizer');
        let container = document.querySelector('body');

        container.append(pane);

        return pane;
    };

    let pane = createCustomizerPane();

    const showCustomizerPane = () => {
        // TODO: Create and show dialog with all the inputs and options (basic for now)
        pane.classList.remove('hidden');
    }; 

    const hideCustomizerPane = () => {
        // TODO: Close dialog modal and wipe form inputs
        pane.classList.add('hidden');
    };

    return { showCustomizerPane, hideCustomizerPane };
}();

export default todoCustomizerController;