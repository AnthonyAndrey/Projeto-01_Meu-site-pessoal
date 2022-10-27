import { action } from "typesafe-actions"
import { ThemeTypes } from "./types"

export const darkTheme = () => action(ThemeTypes.DARK_THEME)
export const lightTheme = () => action(ThemeTypes.LIGHT_THEME)
export const turnOnThemeSwitchAnimation = () => action(ThemeTypes.TURN_ON_SITCH_ANIMATION)
export const turnOffThemeSwitchAnimation = () => action(ThemeTypes.TURN_OFF_SITCH_ANIMATION)
