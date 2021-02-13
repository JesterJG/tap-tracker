/*
 * action types
 */
export const ADD_TRACKER = 'ADD_TRACKER'
export const INCR_TRACKER = 'INCR_TRACKER'
export const DECR_TRACKER = 'DECR_TRACKER'
export const RESET_TRACKER = 'RESET_TRACKER'
export const DELETE_TRACKER = 'DELETE_TRACKER'
export const RENAME_TRACKER = 'RENAME_TRACKER'


/*
 * action creators
 */

export function addTracker(nextId, name, value) {

  return { type: ADD_TRACKER, id: nextId, name, value }
}

export function incrTracker(index) {
  return { type: INCR_TRACKER, index }
}

export function decrTracker(index) {
  return { type: DECR_TRACKER, index }
}

export function resetTracker(index) {
  return { type: RESET_TRACKER, index }
}

export function deleteTracker(index) {
  return { type: DELETE_TRACKER, index }
}

export function renameTracker(index, name) {
  return { type: RENAME_TRACKER, index, name }
}
