import { action } from "typesafe-actions"
import { AnimationTypes } from "./types"

export const loadStart = (type: string) => action(AnimationTypes.LOAD_START, { type })
export const loadEnd = () => action(AnimationTypes.LOAD_END)
export const transitionStart = (type: string) => action(AnimationTypes.TRANSITION_START, { type })
export const transitionEnd = () => action(AnimationTypes.TRANSITION_END)
