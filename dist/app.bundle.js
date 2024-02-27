/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/ui/layout_component_outlines/footer.js
let createFooter = function() {
    let body = document.querySelector('body');

    let footer = document.createElement('footer');
    footer.textContent = 'Footer';

    body.append(footer);
};

/* harmony default export */ const footer = (createFooter);
;// CONCATENATED MODULE: ./src/ui/layout_component_outlines/header.js
let createHeader = function() {
    let body = document.querySelector('body');

    let header = document.createElement('header');
    header.textContent = 'Header';

    body.append(header);
};

/* harmony default export */ const header = (createHeader);
;// CONCATENATED MODULE: ./src/ui/layout_component_outlines/sidebar.js
let createSidebar = function() {
    let body = document.querySelector('body');

    let sidebar = document.createElement('section');
    sidebar.classList.add('sidebar');
    sidebar.textContent = 'Sidebar';

    body.append(sidebar);
};

/* harmony default export */ const sidebar = (createSidebar);
;// CONCATENATED MODULE: ./src/ui/layout_component_outlines/todo_pane.js
let createTodoPane = function() {
    let body = document.querySelector('body');

    let todoPane = document.createElement('section');
    todoPane.classList.add('todo', 'pane');
    todoPane.textContent = 'To do';

    body.append(todoPane);
};

/* harmony default export */ const todo_pane = (createTodoPane);
;// CONCATENATED MODULE: ./src/index.js






let init = function() {
    header();
    sidebar();
    todo_pane();
    footer();
};

init();
/******/ })()
;