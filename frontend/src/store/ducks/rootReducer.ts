import { combineReducers } from "redux";

import animation from './animation'
import navigation from './navigation'
import theme from './theme'

export default combineReducers({
    animation,
    navigation,
    theme
})