import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UPDATE_TASK } from '../../redux/Todoslice';


const Edittasks = () => {
  const current  = useSelector(state => state.todolist.current);
  const [text, setText] = useState('');
  const dispatch = useDispatch();



  const onSave = () => {
    dispatch(UPDATE_TASK({ id: current.id, description: text }));
  }

  useEffect(() => {
    if (current !== null) {
      setText(current.description);
    }
  }, [current]);

  return (
    <div  className="modal fade"
    id="editTask"
    tabIndex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Edit Task
            </h5>
            <div className="modal-body">
              <input
                type="text"
                value={text}
                onChange={e => setText(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btnsecondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button className="btn btn-primary" data-bs-dismiss="modal" onClick={onSave}>
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Edittasks