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

export default createList;