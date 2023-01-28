export enum AnimationTypes {
    LOAD_START = "@animation/LOAD_START",
    LOAD_END = "@animation/LOAD_END",
    TRANSITION_START = "@animation/TRANSITION_START",
    TRANSITION_END = "@animation/TRANSITION_END",
    MENU_START = "@animation/MENU_START",
    MENU_END = "@animation/MENU_END",
}

export interface AnimationState {
    readonly load: boolean
    readonly transition: boolean
    readonly menu: boolean
}
