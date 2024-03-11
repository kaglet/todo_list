import './styles.css';

import createHeader from './ui/layout_component_outlines/header.js';
import createSidebar from './ui/layout_component_outlines/sidebar.js';
import createTodoPane from './ui/layout_component_outlines/todo_pane.js';
import createFooter from './ui/layout_component_outlines/footer.js';

import listsManager from './application_state_logic/all_lists_manager/lists_manager.js';
import createList from './application_state_logic/create_building_blocks/create_list.js';
import createDefaultList from './application_state_logic/create_building_blocks/create_default_list.js';
import createSubtask from './application_state_logic/create_building_blocks/create_subtask.js';
import createTodo from './application_state_logic/create_building_blocks/create_todo.js';

import selectiveListsUpdater from './ui/selective_items_updater/list_UI_updater.js';
import selectiveTodosUpdater from './ui/selective_items_updater/todo_UI_updater.js';

import selectionTracker from './application_state_logic/selection_tracker/selection_tracker.js';

import todosMigrator from './application_state_logic/todos_migrator/todos_migrator.js';

import listAddController from './ui/item_adding/list_addition.js';
import todoAdditionController from './ui/item_adding/todo_addition.js';
// import subtaskAdditionController from './ui/item_adding/subtask_addition';

import listEditController from './ui/item_editing/list_edit.js';
import todoEditController from './ui/item_editing/todo_edit.js';
// import subtaskEditController from './ui/item_editing/subtask_editor';

import listValidator from './ui/validation/list_validation.js';

import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'