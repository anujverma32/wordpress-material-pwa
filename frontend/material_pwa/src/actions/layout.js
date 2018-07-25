import { LAYOUT_TOGGLE_SIDEBAR } from "../constants/actionTypes";

export const toggleSidebar = (currStatus) => ({
    type: LAYOUT_TOGGLE_SIDEBAR,
    payload: !currStatus
})
