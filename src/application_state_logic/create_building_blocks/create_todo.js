let createTodo = function() {
    let todo = Object.create(createTodo.proto);
    this.subtasks = [];

    return todo;
};

createTodo.proto = {
    setName(name) {
        this.name = name;
    },
    getName() {
        return this.name;
    },
    addSubtask(subtask) {
        this.subtasks.append(subtask);
    },
    removeSubtask(index) {
        this.subtasks.splice(index, 1);
    },
    getSubtasks() {
        // return todo list
        return this.subtasks;
    },
    setPriority(priority) {
        this.priority = priority;
    },
    setDueDate(dueDate) {
        this.dueDate = dueDate;
    },
    setDescription(desc) {
        this.description = desc;
    }
};

export default createTodo;