import React from 'react';
import style from './MenuItem.module.scss'
import { useNavigate } from 'react-router-dom'
import { NavigationDelay } from '../../utils/navigationDelay';

import { connect } from "react-redux";
import { ApplicationState } from "../../store";
import { ThemeState } from "../../store/ducks/theme/types";
import { bindActionCreators, Dispatch } from "redux";
import * as NavigationActions from '../../store/ducks/navigation/actions'
import * as ThemeActions from '../../store/ducks/theme/actions'
import classNames from 'classnames';


interface StateProps {// pode ser que seja o state que ta resetando o menu
  theme: ThemeState
}

interface DispatchProps {
    enableConfiguration(): void,
    setPage(page: string): void
    turnOffThemeSwitchAnimation(): void
}

interface OwnProps {
    children?: React.ReactNode,
    text: string,
    to?: string,
    styles?: string 
}

type Props = StateProps & DispatchProps & OwnProps


function MenuItem({
    children,
    text,
    to,
    styles,
    theme,
    setPage,
    enableConfiguration,
    turnOffThemeSwitchAnimation }: Props) {
    const navigate = useNavigate()

    function handleOnClick() {
        if (to) {
            if (theme.switchAnimation==true)turnOffThemeSwitchAnimation()
            setPage(to)
            NavigationDelay(navigate, to)
        } else {
            enableConfiguration()
        }
    }

    return (
        <div className={styles}>
            <div className={classNames({
                [style.item]:true,
                [style['item--light']]:theme.selectedTheme==="light"
                })} onClick={handleOnClick}>
                <div className={style.icon}>{children}</div>
                <span className={style.title}>{text}</span>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch: Dispatch) => (
    bindActionCreators({
        enableConfiguration: NavigationActions.enableConfiguration,
        setPage: NavigationActions.setPage,
        turnOffThemeSwitchAnimation: ThemeActions.turnOffThemeSwitchAnimation
    }, dispatch)
)

const mapStateToProps = (state: ApplicationState) => ({
    theme: state.theme
})

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem)