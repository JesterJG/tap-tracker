import React from 'react'
import PropTypes from 'prop-types'
import './Tracker.css';

const Tracker = ({ onIncr, onDecr, onReset, onDelete, onRename, id, name, value }) => (
  <li>
    <form>
    <input value={name}
      onChange={e => onRename(id, e.target.value)}
     />
    </form>
    <div>
      <div className="trackerVal">
        Current value: {value}
        <div className="modTrackers">
          <button
            onClick={onIncr}
          > + </button>
          <button
             onClick={onDecr}
          > - </button>
          <div className="manageGroup">
            <button class="manageT"
              onClick={onReset}
            >Reset</button>
            <button class="manageT"
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
