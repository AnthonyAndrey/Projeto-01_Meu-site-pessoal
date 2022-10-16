// configuração do estado de nossa aplicação de uma forma global
import { configureStore } from "@reduxjs/toolkit";
import { Store } from 'redux'
import { AnimationState } from "./ducks/animation/types";
import { NavigationState } from './ducks/navigation/types';
import { ThemeState } from './ducks/theme/types';

import rootReducer from "./ducks/rootReducer";

export interface ApplicationState {
    animation: AnimationState,
    navigation: NavigationState,
    theme: ThemeState
}

const store: Store<ApplicationState> = configureStore({ reducer: rootReducer })



export default store;