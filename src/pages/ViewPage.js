/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

function View() {
  const { id } = useParams();
  const items = useSelector(state => state.items)
  const [status, setStatus] = useState(false)

  useEffect(() => {
    const index = items.findIndex(it => it.id === id)
    if (index > 0) {
      setStatus(items[index].complete)
    }
  }, [items]);

  return (
    <div className="view page">
      <div className="content">
        <h1>{status ? 'YES' : 'NO'}</h1>
      </div>
    </div>  
  );
}

export default View;
