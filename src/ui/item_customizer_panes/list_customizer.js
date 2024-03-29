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
            nameInput.placeholder = 'List ideas: Health/School/Movies';
            nameInput.setAttribute('id', 'name');

            return nameInput;
        };

        const createColorChoicesDisplay = () => {
            let colorChoicesDisplay = document.createElement('div');
            colorChoicesDisplay.setAttribute('id', 'color-choices');
    
            let colors = ['transparent','#FE5F55', '#FB8B24', '#FFD97D', '#E1CA96', '#FF9B85', '#60D394', '#AAF683', '#81A4CD', '#054A91', '#5A5766', '#BBC8CA', '#454ADE', '#5F0F40', '#0F4C5C', '#9792E3'];
            
            colors.forEach(color => {
                let colorDisplay = document.createElement('input');
                colorDisplay.setAttribute('type', 'radio');
                colorDisplay.setAttribute('name', 'color-choice');
                colorDisplay.setAttribute('data-color', color);
                colorDisplay.style.backgroundColor = color;
                if (color === 'transparent') {
                    colorDisplay.classList.add('transparent');
                    colorDisplay.style.border = '2px dotted black';
                }
    
                colorChoicesDisplay.append(colorDisplay);
            });

            return colorChoicesDisplay;
        };

        const giveLabelToInput = function(label, input) {
           label.setAttribute('for', input.getAttribute('id'));
        };

        let nameInput = createNameInput();
        let nameLabel = document.createElement('label');
        nameLabel.textContent = "Enter list name: ";

        giveLabelToInput(nameLabel, nameInput);

        let colorChoicesDisplay = createColorChoicesDisplay();
        let colorChoiceLabel = document.createElement('label');
        colorChoiceLabel.textContent = "Choose list color";
        giveLabelToInput(colorChoiceLabel, colorChoicesDisplay);
        
        form.append(nameLabel, nameInput, colorChoiceLabel, colorChoicesDisplay);
        form.method = "dialog";

        return pane;
    };

    // Getter on factory instance pane's components
    const getFormInputs = function(pane) {
        let nameInput = pane.querySelector('#name');
        let colorInput = pane.querySelector(`#color-choices input[type='radio']:checked`);

        return { nameInput, colorInput };
    };

    const getHeading = function(pane) {
        let h2 = pane.querySelector('h2');

        return h2;
    };

    return { hideCustomizerPane, showCustomizerPane, createCustomizerPane, getFormInputs, getHeading };
}();

export default listCustomizer;