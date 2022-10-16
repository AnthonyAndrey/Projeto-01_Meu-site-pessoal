export enum NavigationTypes {
    SET_PAGE = "@navigation/SET_PAGE",
    ENABLE_CONFIGURATION = "@navigation/ENABLE_CONFIGURATION",
    DISABLE_CONFIGURATION = "@navigation/DISABLE_CONFIGURATION",
}

export interface NavigationState{
    readonly page: string
    readonly configuration: boolean
}
