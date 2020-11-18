import { all, call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_ITEMS, RENDER_ITEMS, UPDATE_RENDER_ITEM_START, UPDATE_RENDER_ITEM_SUCCESS } from '../actions';
import { AIRTABLE_API_KEY, AIRTABLE_TABLE, AIRTABLE_BASE } from '../config';

const updateRecordData = (record) => {
  return fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE}/${AIRTABLE_TABLE}/${record.recordId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${AIRTABLE_API_KEY}`
    },
    body: JSON.stringify({
      'fields': {
        "Complete": record.complete
      }
    })
  })
}

export function* fetchToDoList() {
  const endpoint = `https://api.airtable.com/v0/${AIRTABLE_BASE}/${AIRTABLE_TABLE}?api_key=${AIRTABLE_API_KEY}`;
  const response = yield call(fetch, endpoint);
  const data = yield response.json();
  yield put({ type: RENDER_ITEMS, items: data.records });
}

export function* updateRecord(action) {
  const response = yield call(updateRecordData, action.record);
  const data = yield response.json();
  yield put({ type: UPDATE_RENDER_ITEM_SUCCESS, record: data });
}

export default function* rootSaga() {
  yield all([
    takeLatest(LOAD_ITEMS, fetchToDoList),
    takeLatest(UPDATE_RENDER_ITEM_START, updateRecord),
  ]);
}
