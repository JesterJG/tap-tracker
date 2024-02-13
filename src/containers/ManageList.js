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

  const entry = tracker => alertStr += `{ id: ${tracker.id} name: "${tracker.name}" val: ${tracker.value} }\n`
  var alertStr = "List: {";
  trackers.forEach(entry);
  alertStr += "}";
  alert(alertStr);
}

const ManageList = ({ trackers, dispatch }) => {
  return (
    <div className="manage-list">
      <button  className="btn btn-light btn-sm btn-outline-dark ml-5"
        onClick={e => dispatch(addTracker('NewTracker'))} >
        New Tracker
      </button>
      <button  className="btn btn-light btn-sm btn-outline-dark ml-5" onClick={() => logList(trackers)} >
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
