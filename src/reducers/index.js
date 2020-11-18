/* eslint-disable default-case */
import { RENDER_ITEMS, UPDATE_RENDER_ITEM_SUCCESS } from '../actions';

// ... initialState ...
const initialState = {
  items: [],
}

export default function toDoApp(state = initialState, action) {
  switch (action.type) {
    case RENDER_ITEMS:
      return {
        ...state,
        items: action.items.map((item) => ({
          recordId: item.id,
          id: item.fields['ID'],
          adminId: item.fields['Admin ID'],
          complete: item.fields['Complete']
        }))
      };
    case UPDATE_RENDER_ITEM_SUCCESS:
      const newItems = state.items.slice()
      const index = newItems.findIndex(it => it.recordId === action.record.id)
      newItems[index]['complete'] = action.record.fields['Complete']
      return {
        ...state,
        items: newItems,
      }
    default:
      return state;
  }
}
