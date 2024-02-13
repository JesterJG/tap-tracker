import React from 'react'
import PropTypes from 'prop-types'
import './Tracker.css';

const Tracker = ({ onIncr, onDecr, onReset, onDelete, onRename, id, name, value }) => (
  <li>
    <div className='trackerBox'>
      <form>
        <input value={name}
          onChange={e => onRename(id, e.target.value)}
         />
      </form>
      <div className="myEntry">
        <div className="trackerVal">
          Current value: {value}
        </div>
        <div>
          <div className="modTrackers">
            <button className="btn btn-light btn-sm btn-outline-dark"
              onClick={onIncr}
            > + </button>
            <button className="btn btn-light btn-sm btn-outline-dark"
              onClick={onDecr}
            > - </button>
          </div>
          <div className="manageGroup">
            <button className="manageT btn btn-outline-dark ml-3"
              onClick={onReset}
            >Reset</button>
            <button className="manageT btn btn-danger ml-2"
              onClick={onDelete}
            >Delete</button>
          </div>
        </div>
      </div>
    </div>
  </li>
);

Tracker.propTypes = {
  onIncr: PropTypes.func.isRequired,
  onDecr: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onRename: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired
}

export default Tracker;
