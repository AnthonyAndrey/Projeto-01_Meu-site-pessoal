import { Reducer } from "redux"
import { ThemeState, ThemeTypes } from "./types"

const INITIAL_STATE: ThemeState = {
    selectedTheme: "dark",
    switchAnimation: false
}

const reducer: Reducer<ThemeState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ThemeTypes.DARK_THEME:
            return { ...state, selectedTheme: 'dark' }
        case ThemeTypes.LIGHT_THEME:
            return { ...state, selectedTheme: 'light' }
        case ThemeTypes.TURN_ON_SITCH_ANIMATION:
            return { ...state, switchAnimation: true }
        case ThemeTypes.TURN_OFF_SITCH_ANIMATION:
            return { ...state, switchAnimation: false }
        default:
            return state
    }
}

export default reducer