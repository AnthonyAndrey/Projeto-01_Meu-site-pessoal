export enum AnimationTypes {
    LOAD_START = "@animation/LOAD_START",
    LOAD_END = "@animation/LOAD_END",
    TRANSITION_START = "@animation/TRANSITION_START",
    TRANSITION_END = "@animation/TRANSITION_END",
}

export interface AnimationState{
    readonly load: boolean
    readonly transition: boolean
    readonly type: string
}
