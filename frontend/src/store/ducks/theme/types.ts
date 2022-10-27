export enum ThemeTypes {
    DARK_THEME = "@theme/DARK_THEME",
    LIGHT_THEME = "@theme/LIGHT_THEME",
    TURN_ON_SITCH_ANIMATION = "theme/TURN_ON_SITCH_ANIMATION",
    TURN_OFF_SITCH_ANIMATION = "theme/TURN_OFF_SITCH_ANIMATION"
}

export interface ThemeState{
    readonly selectedTheme: string,
    readonly switchAnimation: boolean
}
