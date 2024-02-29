import createList from '../../application_state_logic/create_building_blocks/create_list.js';
import listsManager from '../../application_state_logic/all_lists_manager/lists_manager.js';
import createSidebar from '../layout_component_outlines/sidebar.js';

// TODO: Merge edit and add new list instance as motivated below
// An edit controller controls new instance or current instance editing, each same pane should allow editing on itself. Each input will anyway and editing of the same instance on click of enter for example. 
// Or explicit clicking the edit button to bring the pane up if its controlled by that
// Is it different edit control in each case. Well no right. The pane itself doesn't manage editing on the application state unless its a listener on itself calling a similar method as the button confirmation input would on the boolean flag.
// I actually haven't thought how an edit controller will work over an addition controller
// But now I realize they should be one and the same thing technically. Just with different alternate methods called when entering the input details from the form (to add a new instance or edit a current instance)


// Manages addition functionality of new list instances 
let listEditController = function() {
    let nameInput = createSidebar.getNameInput();

    let quickAddButton = createSidebar.getQuickAddButton(); // TODO: call a get quick add button from where its created in DOM for maintainability
    let saveButton;
    
    let customAddButton = createSidebar.getCustomAddButton();
    let closeAddPaneButton;

    const showAdditionPane = () => {
        pane.showModal();
    };

    const hideAdditionPane = () => {
        pane.close();
    };

    const createAddPane = () => {
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

        customAddButton.addEventListener('click', showAdditionPane);
        closeAddPaneButton.addEventListener('click', hideAdditionPane);

        // TODO: Add components, event listeners, and functionality to dialog pane

        pane.append(closeAddPaneButton, saveButton);

        // TODO: pane can give getters and setter methods as well since these elements are created inside this component just like the footer etc.
        // Same way it will be done for footer, header modules and them. On creation of them they give off other services they can take on.

        return pane;
    };

    let pane = createAddPane();

    const addQuickList = () => {
        let name = nameInput.textContent;
        if (name.trim() === "") return;

        let list = createList(name);
        // Store list after creating 
        listsManager.addList(list);
    };

    const getFormDetails = () => {
        let name;
        return { name };
    };

    const addCustomList = () => {
        let { name } = getFormDetails();
        let list = createList();
        list.setName(name);
        listsManager.addList(list);
    };

    quickAddButton.addEventListener('click', addQuickList);
    saveButton.addEventListener('click', addCustomList);
}();

export default listEditController;

// TODO: Simply show created list details (with given name for quick add if there is a staged list) during addition
// There is no way to access edits with customizer pane with this controller
// Call quick add todo with a default name on list creation (or rather not just don't use a name if its not given)
// When customizer pane is brought up it can show created list details (or the list passed through it put simply, to then display that lists details in the shown pane)

// Whatever is altered in subtask edit view is edited at that selected index (good performance from selection tracker being used as always a linear search time)