import {
  ADD_TRACKER,
  INCR_TRACKER,
  DECR_TRACKER,
  RESET_TRACKER,
  DELETE_TRACKER,
  RENAME_TRACKER
} from '../actions'

const initialState = {
  trackers: [
    {
      id: 0,
      name: "Tracker1",
      value: 0,
    },
    {
      id:1,
      name: "Tracker2",
      value: 0,
    }],
}

function deleteEntry(array, index) {
  let newArray = array.slice()
  newArray.splice(index, 1)
  for (let j=0 ; j<newArray.length; j +=1) {
    newArray[j].id = j;
  }
  return newArray
}

function trackerApp(state = initialState, action) {
  switch (action.type) {
    case ADD_TRACKER:
      return Object.assign({}, state, {
        trackers: [
          ...state.trackers,
          {
            id: action.id,
            name: action.name,
            value: action.value
          }
        ],
      })
    case INCR_TRACKER:
      return Object.assign({}, state, {
        trackers:
          state.trackers.map((tracker, index) => {
            if (index === action.index) {
              return Object.assign({}, tracker, {
                value: tracker.value + 1
              })
            }
            return tracker;
          })
        })
    case DECR_TRACKER:
      return Object.assign({}, state, {
        trackers:
          state.trackers.map((tracker, index) => {
            if (index === action.index) {
              return Object.assign({}, tracker, {
                value: tracker.value - 1
              })
            }
            return tracker;
          })
        })
    case RESET_TRACKER:
      return Object.assign({}, state, {
        trackers:
          state.trackers.map((tracker, index) => {
            if (index === action.index) {
              return Object.assign({}, tracker, {
                value: 0
              })
            }
            return tracker;
          })
        })
        case DELETE_TRACKER:
          return Object.assign({}, state, {
            trackers:
              deleteEntry(state.trackers, action.index)
            })
      case RENAME_TRACKER:
        return Object.assign({}, state, {
          trackers:
            state.trackers.map((tracker, index) => {
              if (index === action.index) {
                return Object.assign({}, tracker, {
                  name: action.name
                })
              }
              return tracker;
            })
          })
    default:
      return state;
  }
}

export default trackerApp;
