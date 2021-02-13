import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addTracker } from '../actions'

/*
<button onClick={this.logList} >
  Log List
</button>

<button onClick={logList(trackers)} >
  Log List
</button>
*/

const logList = (trackers) => {
  const trackerList = trackers;
  var alertStr = "List: {";
  for (let j=0 ; j<trackerList.length; j +=1) {
    alertStr += "{id: " + trackerList[j].id +  " name: " + trackerList[j].name + ": " + trackerList[j].value + "}";
    trackerList[j].id = j;
  }
  alertStr += "}";
  alert(alertStr);
}

const ManageList = ({ trackers, dispatch }) => {
  return (
    <div className="manage-list">
      <button className="manage"
        onClick={e => dispatch(addTracker(trackers.length, 'NewTracker', 0))} >
        New Tracker
      </button>
      <button onClick={() => logList(trackers)} >
        Log List
      </button>
    </div>
  )
}

ManageList.propTypes = {
  trackers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired
    }).isRequired
  ).isRequired,
}
const mapStateToProps = state => {
  return {
    trackers: state.trackers
  }
}

export default connect(mapStateToProps)(ManageList)
