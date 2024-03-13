let colorAssigner = function () {
    const getPriorityColor = (priorityLevel) => {
        switch (priorityLevel) {
            case "low":
                return "blue";

            case "medium":
                return "orange"

            case "high":
                return "red";

            default:
                break;
        }
    };

    return { getPriorityColor };
}();

export default colorAssigner;