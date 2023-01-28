import { Reducer } from "redux"
import { AnimationState, AnimationTypes } from "./types"

const INITIAL_STATE: AnimationState = {
    load: true,
    transition: true,
    menu: true,
}

const reducer: Reducer<AnimationState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AnimationTypes.LOAD_START:
            return { ...state, load: true }
        case AnimationTypes.LOAD_END:
            return { ...state, load: false }
        case AnimationTypes.TRANSITION_START:
            return { ...state, transition: true }
        case AnimationTypes.TRANSITION_END:
            return { ...state, transition: false }
        case AnimationTypes.MENU_START:
            return { ...state, menu: true }
        case AnimationTypes.MENU_END:
            return { ...state, menu: false }
        default:
            return state
    }
}

export default reducer