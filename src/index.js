let createList = function() {
    let list = Object.create(createList.proto);
    list.setName("Default List");
    list.todos = [];

    return list;
};

createList.proto = {
    setName(name) {
        this.name = name;
    },
    getName() {
        return this.name;
    },
    addTodo(todo) {
        this.todos.append(todo);
    },
    removeTodo(index) {
        this.todos.splice(index, 1);
    },
    get todos() {
        // return todo list
        return this.todos();
    }
};

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
        return this.subtasks();
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

let createSubtask = function() {
    let subtask = Object.create(createSubtask.proto);

    return subtask;
};

createSubtask.proto = {
    setName(name) {
        this.name = name;
    },
    getName() {
        return this.name;
    },
};

Object.setPrototypeOf(createSubtask.proto, createTodo.proto);

// Allows user capabilities of interacting with task creation and management functionality
let taskManager = function() {

}();

// need interface to add lists then todos to lists then subtasks to todos

// Separate into createList, createTask, createSubtask files which may import whatever they need // or maybe all these are exported for management
// They need to be bundled into a file or folder though (I will call it categorizationLevels)