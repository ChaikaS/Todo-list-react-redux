export const ADD_ITEM = "ADD_ITEM";
export const COMPLETED_ITEM = "COMPLETE_ITEM";
export const COMPLETED_ITEM_COMPLETED_LIST = "COMPLETED_ITEM_COMPLETED_LIST";
export const DELETED_ITEM = "DELETED_ITEM";
export const DELETED_ITEM_COMPLETED_LIST = "DELETED_ITEM_COMPLETED_LIST";
export const POST_ITEM_TO_TODO_LIST = "POST_ITEM_TO_TODO_LIST";
export const POST_ITEM_TO_COMPLETED_LIST = "POST_ITEM_TO_COMPLETED_LIST";
export const UPDATE_TODO_TEXT = "UPDATE_TODO_TEXT";
export const UPDATE_INPUT_TEXT = "UPDATE_INPUT_TEXT";
export const SAVE_UPDATE_INPUT_TEXT = "SAVE_UPDATE_INPUT_TEXT";
export const NULL_UPDATE_INPUT_TEXT = "NULL_UPDATE_INPUT_TEXT";

function createdTodoItem(title, id) {
  return {
    type: ADD_ITEM,
    payload: { title: title, completed: false, id: id, edit: false },
  };
}
function completedTodoItem(id) {
  return {
    type: COMPLETED_ITEM,
    payload: {
      id,
    },
  };
}
function completedTodoItemCompletedList(id) {
  return {
    type: COMPLETED_ITEM_COMPLETED_LIST,
    payload: {
      id,
    },
  };
}
function deletedTodoItem(id) {
  return {
    type: DELETED_ITEM,
    payload: {
      id,
    },
  };
}
function deletedTodoItemCompletedList(id) {
  return {
    type: DELETED_ITEM_COMPLETED_LIST,
    payload: {
      id,
    },
  };
}
function postToCompletedList(item) {
  return {
    type: POST_ITEM_TO_COMPLETED_LIST,
    payload: {
      item,
    },
  };
}
function postToTodoList(item) {
  return {
    type: POST_ITEM_TO_TODO_LIST,
    payload: {
      item,
    },
  };
}
function updateInputText(title, id) {
  return {
    type: UPDATE_INPUT_TEXT,
    payload: {
      title,
      id,
    },
  };
}
function saveUpdateInputText(title, id) {
  return {
    type: SAVE_UPDATE_INPUT_TEXT,
    payload: {
      title,
      id,
    },
  };
}
function nullUpdateInputText(object) {
  return {
    type: NULL_UPDATE_INPUT_TEXT,
    payload: { object },
  };
}

export { createdTodoItem, completedTodoItem, deletedTodoItem, postToCompletedList, completedTodoItemCompletedList, deletedTodoItemCompletedList, postToTodoList, updateInputText, saveUpdateInputText, nullUpdateInputText };
