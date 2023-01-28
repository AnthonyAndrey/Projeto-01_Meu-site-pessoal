import { action } from "typesafe-actions"
import { AnimationTypes } from "./types"

export const loadStart = () => action(AnimationTypes.LOAD_START)
export const loadEnd = () => action(AnimationTypes.LOAD_END)
export const transitionStart = () => action(AnimationTypes.TRANSITION_START)
export const transitionEnd = () => action(AnimationTypes.TRANSITION_END)
export const menuStart = () => action(AnimationTypes.MENU_START)
export const menuEnd = () => action(AnimationTypes.MENU_END)
