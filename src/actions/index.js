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

export function addTracker(name) {

  return { type: ADD_TRACKER, name }
}

export function incrTracker(id) {
  return { type: INCR_TRACKER, id }
}

export function decrTracker(id) {
  return { type: DECR_TRACKER, id }
}

export function resetTracker(id) {
  return { type: RESET_TRACKER, id }
}

export function deleteTracker(id) {
  return { type: DELETE_TRACKER, id }
}

export function renameTracker(id, name) {
  return { type: RENAME_TRACKER, id, name }
}
