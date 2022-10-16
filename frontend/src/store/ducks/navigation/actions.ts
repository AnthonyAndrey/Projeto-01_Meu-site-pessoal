import { action } from "typesafe-actions"
import { NavigationTypes } from "./types"

export const setPage = (page: string) => action(NavigationTypes.SET_PAGE, { page })
export const enableConfiguration = () => action(NavigationTypes.ENABLE_CONFIGURATION)
export const disableConfiguration = () => action(NavigationTypes.DISABLE_CONFIGURATION)
