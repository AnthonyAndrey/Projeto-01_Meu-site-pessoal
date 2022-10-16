export enum ThemeTypes {
    DARK_THEME = "@theme/DARK_THEME",
    LIGHT_THEME = "@theme/LIGHT_THEME",
}

export interface ThemeState{
    readonly selectedTheme: string
}
