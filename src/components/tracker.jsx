import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Tracker extends Component {
  render() {
    const { tracker, onRename, onIncr, onDecr, onDelete, onReset} = this.props;

    return (
      <li>
      <div className="border border-dark pl-3 pb-2">
        <form className="mt-2">
          <input value={tracker.name}
            onChange={e => onRename(tracker.id, e.target.value)}
           />
        </form>
        <div className="myEntry">
          <div className="trackerVal">
            <div>
              Current value: {tracker.value}
            </div>
            <div className="row">
              <div className="col-1 ml-2">
                <button className="btn btn-light btn-sm btn-outline-dark ml-3"
                onClick={onIncr}
              > + </button>
              <button className="btn btn-light btn-sm btn-outline-dark"
                 onClick={onDecr}
              > - </button>
              </div>
              <div className="col-7 manageGroup">
                <button className="manageT btn btn-outline-dark ml-1"
                  onClick={onReset}
                >Reset</button>
                <button className="manageT btn btn-danger ml-2"
                  onClick={onDelete}
                >Delete</button>
              </div>
            </div>
          </div>
        </div>
        </div>
      </li>
    )}
  };

  Tracker.propTypes = {
    onIncr: PropTypes.func.isRequired,
    onDecr: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onRename: PropTypes.func.isRequired,
    tracker: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired
      }).isRequired
  }


export default Tracker;
