import React from 'react'
import PropTypes from 'prop-types'
import Tracker from './Tracker'

const TrackerList = ({ trackers, incrTracker, decrTracker, resetTracker, deleteTracker, renameTracker }) => (
  <div>
    <h2>Trackers:</h2>
    <ul>
      {trackers.map(tracker => (
        <Tracker
          key={tracker.id}
          {...tracker}
          onIncr={() => incrTracker(tracker.id)}
          onDecr={() => decrTracker(tracker.id)}
          onReset={() => resetTracker(tracker.id)}
          onDelete={() => deleteTracker(tracker.id)}
          onRename={renameTracker}
          />
      ))}
    </ul>
  </div>
)

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
  renameTracker: PropTypes.func.isRequired
}

export default TrackerList;
