import { action } from "typesafe-actions"
import { ThemeTypes } from "./types"

export const darkTheme = () => action(ThemeTypes.DARK_THEME)
export const lightTheme = () => action(ThemeTypes.LIGHT_THEME)
