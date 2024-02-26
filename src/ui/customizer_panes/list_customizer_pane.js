let listCustomizerController = function() {
    let showCustomizerButton = document.querySelector('button.list.customizer.show');
    let closeCustomizerButton = document.querySelector('button.list.customizer.close');

    const createCustomizerPane = () => {
        let pane = document.createElement('dialog');
        pane.classList.add('pane', 'list', 'customizer');
        let container = document.querySelector('body');

        container.append(pane);
        pane.classList.add('hidden');

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

export default listCustomizerController;