import listsManager from "../all_lists_manager/lists_manager";
import storageManager from "./storage_manager.js";

let preloader = function () {
    const populateInitialLists = () => {
        if (!localStorage.getItem("lists")) {
            // Initialize lists as empty
            storageManager.saveChanges();
        } else {
            storageManager.getAllLists().forEach(list => {
                listsManager.addList(list);
            });
        }
    };

    const updateDisplayWithLists = () => {
        // remove default list display in order to place updated list or non-updated list to be sure (no other way to check if default list was edited)
        // show all lists method if it is there or just show one at a time or remove initial one in display that does not match one in lists manager
        // Need to use same methods that ensure coherency and a display all lists method would be nice anyway from a list of lists provided as a parameter to make things easy and quick
        // Update display with the lists actually logically present to put it simply, the entire display of all lists like todos
    };

    populateInitialLists();

    return {};
}();

export default preloader;