import { connect } from 'react-redux'
import { incrTracker, decrTracker, resetTracker, deleteTracker, renameTracker } from '../actions'
import TrackerList from '../components/trackerList.jsx'


const mapStateToProps = state => {
  return {
    trackers: state.trackers
  }
}

const mapDispatchToProps = dispatch => {
  return {
    incrTracker: id => {
      dispatch(incrTracker(id))
    },
    decrTracker: id => {
      dispatch(decrTracker(id))
    },
    resetTracker: id => {
      dispatch(resetTracker(id))
    },
    deleteTracker: (id) => {
      dispatch(deleteTracker(id))
    },
    renameTracker: (id, name) => {
      dispatch(renameTracker(id, name))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackerList);
