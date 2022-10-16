import { NavigateFunction } from "react-router-dom"

export function NavigationDelay(action: NavigateFunction, to: string) {
    return setTimeout(() => { action(to) }, 200)
}