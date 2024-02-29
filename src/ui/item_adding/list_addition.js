import createList from '../../application_state_logic/create_building_blocks/create_list.js';
import listsManager from '../../application_state_logic/all_lists_manager/lists_manager.js';
import createSidebar from '../layout_component_outlines/sidebar.js';
import listCustomizer from '../item_customizers/list_customizer.js';

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
    let customAddButton = createSidebar.getCustomAddButton();

    const addQuickList = () => {
        let name = nameInput.textContent;
        if (name.trim() === "") return;

        let list = createList(name);
        // Store list after creating 
        listsManager.addList(list);
    };

    const getFormDetails = () => {
        let name; // extract from form expected (if shared then share) and add these details for saving, we'll make the responsibility of the pane itself to get its details and then deconstruct them here
        // whether the pane happens to be shared with other things doesn't matter so much to this module. It only cares about deconstructed results expected from pane.
        return { name };
    };

    const addCustomList = () => {
        let { name } = getFormDetails();
        let list = createList();
        list.setName(name);
        listsManager.addList(list);
    };

    quickAddButton.addEventListener('click', addQuickList);
    customAddButton.addEventListener('click', listCustomizer.showAdditionPane());

    return { addCustomList };
}();

export default listEditController;

// TODO: Simply show created list details (with given name for quick add if there is a staged list) during addition
// There is no way to access edits with customizer pane with this controller
// Call quick add todo with a default name on list creation (or rather not just don't use a name if its not given)
// When customizer pane is brought up it can show created list details (or the list passed through it put simply, to then display that lists details in the shown pane)

// Whatever is altered in subtask edit view is edited at that selected index (good performance from selection tracker being used as always a linear search time)