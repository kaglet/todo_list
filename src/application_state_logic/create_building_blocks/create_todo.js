let createTodo = function(name) {
    let todo = Object.create(createTodo.proto);
    todo.setName(name);
    todo.subtasks = [];

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
        this.subtasks.push(subtask);
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
    setScheduleDate(dueDate) {
        this.dueDate = dueDate;
    },
    setDescription(desc) {
        this.description = desc;
    }
};

export default createTodo;