// ... ADD_TODO ...
export const LOAD_ITEMS = 'LOAD_ITEMS';
export const RENDER_ITEMS = 'RENDER_ITEMS';
export const UPDATE_RENDER_ITEM_START = 'UPDATE_RENDER_ITEM_START';
export const UPDATE_RENDER_ITEM_SUCCESS = 'UPDATE_RENDER_ITEM_SUCCESS';

// ... addToDo ...

export function loadItems() {
  return {
    type: LOAD_ITEMS
  };
}

export function updateItem(record) {
  return {
    type: UPDATE_RENDER_ITEM_START,
    record,
  };
}
