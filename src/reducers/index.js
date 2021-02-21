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
  nextId: 2,
}

export default function trackerReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TRACKER:
      return Object.assign({}, state, {
        trackers: [
          ...state.trackers,
          {
            id: state.nextId,
            name: action.name,
            value: 0
          }
        ],
        nextId: state.nextId+1
      })
    case INCR_TRACKER:
      return {...state,
        trackers:
          state.trackers.map((tracker) => {
            if (tracker.id === action.id) {
              return {...tracker,
                value: tracker.value + 1
              }
            }
            return tracker;
          })
        };
    case DECR_TRACKER:
      return { ...state,
        trackers:
          state.trackers.map((tracker) => {
            if (tracker.id === action.id) {
              return { ...tracker,
                value: tracker.value - 1
              }
            }
            return tracker;
          })
        }
    case RESET_TRACKER:
      return { ...state,
        trackers:
          state.trackers.map((tracker) => {
            if (tracker.id === action.id) {
              return {...tracker,
                value: 0
              }
            }
            return tracker;
          })
        }
        case DELETE_TRACKER:
          return { ...state,
            trackers: state.trackers.filter(n => n.id !== action.id)
            }
      case RENAME_TRACKER:
        return { ...state,
          trackers:
            state.trackers.map((tracker) => {
              if (tracker.id === action.id) {
                return {...tracker,
                  name: action.name
                }
              }
              return tracker;
            })
          }
    default:
      return state;
  }
}
