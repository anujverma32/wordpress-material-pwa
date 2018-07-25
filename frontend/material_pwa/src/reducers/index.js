import { combineReducers } from 'redux'

import layout, * as fromLayout from './layout'

export default combineReducers({
    layout: layout,
})

export const isSidebarOpen =
    state => fromLayout.isSidebarOpen(state.layout)