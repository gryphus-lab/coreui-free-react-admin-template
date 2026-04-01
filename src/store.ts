/**
 * Redux Store Configuration
 *
 * Simple Redux store managing global application state.
 * Handles sidebar visibility and theme preferences.
 *
 * @module store
 */

import { legacy_createStore as createStore } from 'redux'

/**
 * Initial state for the Redux store
 * @type {Object}
 * @property {boolean} sidebarShow - Controls sidebar visibility (true = visible, false = hidden)
 * @property {string} theme - Current theme mode ('light', 'dark', or 'auto')
 */
const initialState: object = {
  sidebarShow: true,
  theme: 'light',
}

/**
 * Root reducer function that handles all state changes
 *
 * @param {Object} state - Current state (defaults to initialState)
 * @param {Object} action - Action object with type and payload
 * @param {string} action.type - Action type ('set' to update state)
 * @param {...*} rest - Additional properties to merge into state
 * @returns {Object} New state object
 *
 * @example
 * // Update sidebar visibility
 * dispatch({ type: 'set', sidebarShow: false })
 *
 * @example
 * // Update theme
 * dispatch({ type: 'set', theme: 'dark' })
 *
 * @example
 * // Update multiple properties
 * dispatch({ type: 'set', sidebarShow: true, theme: 'light' })
 */
const changeState = (state: object = initialState, { type, ...rest }: { type: string }): object => {
  if (type === 'set') {
    return { ...state, ...rest }
  } else {
    return state
  }
}

/**
 * Redux store instance
 * @type {import('redux').Store}
 */
const store: import('redux').Store = createStore(changeState)
export default store
