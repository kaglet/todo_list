import './styles.css';
import createFooter from './ui/layout_component_outlines/footer';
import createHeader from './ui/layout_component_outlines/header';
import createSidebar from './ui/layout_component_outlines/sidebar';
import createTodoPane from './ui/layout_component_outlines/todo_pane';

let init = function() {
    createHeader();
    createSidebar();
    createTodoPane();
    createFooter();
};

init();