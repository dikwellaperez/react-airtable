/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import Switch from 'react-switch'
import { Link, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { updateItem } from '../actions';

function Admin() {
  const { id } = useParams();
  const items = useSelector(state => state.items)
  const dispatch = useDispatch()
  const index = items.findIndex(it => it.id === id)
  const [status, setStatus] = useState(false)

  useEffect(() => {
    const index = items.findIndex(it => it.id === id)
    if (index > 0) {
      setStatus(items[index].complete)
      const record = Object.assign({}, items[index]);
      if (record && !status) {
        record.complete = !status;
        dispatch(updateItem(record));
      }
    }
  }, [items]);

  const changeStatus = () => {
    const record = Object.assign({}, items[index]);
    record.complete = !status;
    dispatch(updateItem(record));
  }

  return (
    <div className="admin page">
      <div className="content">
        <Switch
          onChange={changeStatus}
          checked={status}
          checkedIcon={false}
          uncheckedIcon={false}
          onColor={'#30ba9f'}
          offColor={'#a8b8ba'}
        />
        <h1>{status ? 'YES' : 'NO'}</h1>
      </div>
    </div>
  );
}

export default Admin;
