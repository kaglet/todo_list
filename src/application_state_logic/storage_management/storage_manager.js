import listsManager from "../all_lists_manager/lists_manager";

let storageManager = function () {
    // Do not perform any functionality if storage API is not available on user browser
    // This check is used within the functionality not outside
    // TODO: Need an alert error message at the beginning only once if storage is not available
    const storageAvailable = (type) => {
        let storage;
        try {
            storage = window[type];
            const x = "__storage_test__";
            storage.setItem(x, x);
            storage.removeItem(x);
            return true;
        } catch (e) {
            return (
                e instanceof DOMException &&
                // everything except Firefox
                (e.code === 22 ||
                    // Firefox
                    e.code === 1014 ||
                    // test name field too, because code might not be present
                    // everything except Firefox
                    e.name === "QuotaExceededError" ||
                    // Firefox
                    e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
                // acknowledge QuotaExceededError only if there's something already stored
                storage &&
                storage.length !== 0
            );
        }
    };

    const saveChanges = () => {
        if (!storageAvailable) return;

        localStorage.setItem("lists", JSON.stringify(listsManager.getLists()));

        console.clear();
        console.log(JSON.parse(localStorage.getItem("lists")));
    };

    const getAllLists = () => {
        return JSON.parse(localStorage.getItem("lists"));
    };

    return { saveChanges, getAllLists };
}();

export default storageManager;