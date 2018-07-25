import { LAYOUT_TOGGLE_SIDEBAR } from "../constants/actionTypes";

const initialState = {
    isSidebarOpen: true,
}
export default (state = initialState, action) => {
    switch (action.type) {
        case LAYOUT_TOGGLE_SIDEBAR:
            return {
                ...state,
                isSidebarOpen: action.payload
            }
        default:
            return state
    }
}
export const isSidebarOpen = (state) => (state.isSidebarOpen)
