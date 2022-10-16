import { Reducer } from "redux"
import { NavigationState, NavigationTypes } from "./types"

const INITIAL_STATE: NavigationState = {
    page: "Menu",
    configuration: false
}

const reducer: Reducer<NavigationState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NavigationTypes.SET_PAGE:
            return { ...state, configuration: false, page: action.payload.data }
        case NavigationTypes.ENABLE_CONFIGURATION:
            return { ...state, configuration: true }
        case NavigationTypes.DISABLE_CONFIGURATION:
            return { ...state, configuration: false }
        default:
            return state
    }
}

export default reducer