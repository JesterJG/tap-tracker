import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tracker from './tracker.jsx'

class TrackerList extends Component {
  render() {
    const { trackers, incrTracker, decrTracker, resetTracker, deleteTracker, renameTracker} = this.props;

    return (
      <div>
        <h2  className="ml-3">Trackers:</h2>
        <ol>
          {trackers.map(tracker => (
            <Tracker
              key={tracker.id}
              tracker={tracker}
              onIncr={() => incrTracker(tracker.id)}
              onDecr={() => decrTracker(tracker.id)}
              onReset={() => resetTracker(tracker.id)}
              onDelete={() => deleteTracker(tracker.id)}
              onRename={renameTracker}
              />
          ))}
        </ol>
      </div>
    )}
  };

TrackerList.propTypes = {
  trackers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired
    }).isRequired
  ).isRequired,
  incrTracker: PropTypes.func.isRequired,
  decrTracker: PropTypes.func.isRequired,
  resetTracker: PropTypes.func.isRequired,
  deleteTracker: PropTypes.func.isRequired,
  renameTracker: PropTypes.func.isRequired
}

export default TrackerList;
