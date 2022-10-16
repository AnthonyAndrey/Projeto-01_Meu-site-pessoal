import { Reducer } from "redux"
import { AnimationState, AnimationTypes } from "./types"

const INITIAL_STATE: AnimationState = {
    load: true,
    transition: true,
    type: "initial"
}

const reducer: Reducer<AnimationState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AnimationTypes.LOAD_START:
            return { ...state, load: true, type: action.payload.data }
        case AnimationTypes.LOAD_END:
            return { ...state, load: false }
        case AnimationTypes.TRANSITION_START:
            return { ...state, transition: true, type: action.payload.data }
        case AnimationTypes.TRANSITION_END:
            return { ...state, transition: false }
        default:
            return state
    }
}

export default reducer