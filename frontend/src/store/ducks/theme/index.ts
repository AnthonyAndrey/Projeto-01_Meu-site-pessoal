import { Reducer } from "redux"
import { ThemeState, ThemeTypes } from "./types"

const INITIAL_STATE: ThemeState = {
    selectedTheme: "dark",
}

const reducer: Reducer<ThemeState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ThemeTypes.DARK_THEME:
            return { ...state, load: 'dark' }
        case ThemeTypes.LIGHT_THEME:
            return { ...state, load: 'light' }
        default:
            return state
    }
}

export default reducer