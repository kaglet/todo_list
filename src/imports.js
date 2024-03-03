import './styles.css';

import createHeader from './ui/layout_component_outlines/header';
import createSidebar from './ui/layout_component_outlines/sidebar';
import createTodoPane from './ui/layout_component_outlines/todo_pane';
import createFooter from './ui/layout_component_outlines/footer';

import listsManager from './application_state_logic/all_lists_manager/lists_manager';
import createList from './application_state_logic/create_building_blocks/create_list';
import createSubtask from './application_state_logic/create_building_blocks/create_subtask';
import createTodo from './application_state_logic/create_building_blocks/create_todo';

import selectionTracker from './application_state_logic/selection_tracker/selection_tracker';

import todosMigrator from './application_state_logic/todos_migrator/todos_migrator';

import listAddController from './ui/item_adding/list_addition';
// import todoAdditionController from './ui/item_adding/todo_addition';
// import subtaskAdditionController from './ui/item_adding/subtask_addition';

// import listEditController from './ui/item_editing/list_editor';
// import todoEditController from './ui/item_editing/todo_editor';
// import subtaskEditController from './ui/item_editing/subtask_editor';