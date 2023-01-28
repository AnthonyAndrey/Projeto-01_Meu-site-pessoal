import React, { useState } from 'react';
import style from './Configuration.module.scss';
import classNames from 'classnames';
import { connect } from "react-redux";
import { ApplicationState } from "../../store";
import { NavigationState } from "../../store/ducks/navigation/types";
import { ThemeState } from "../../store/ducks/theme/types";
import { useEffect } from 'react'
import { bindActionCreators, Dispatch } from "redux";
import * as NavigationActions from '../../store/ducks/navigation/actions'
import * as ThemeActions from '../../store/ducks/theme/actions'

interface StateProps {
    navigate: NavigationState,
    theme: ThemeState
}

interface DispatchProps {
    disableConfiguration(): void
    darkTheme(): void
    lightTheme(): void
    turnOnThemeSwitchAnimation(): void
    turnOffThemeSwitchAnimation(): void
}


type Props = StateProps & DispatchProps

function Configuration({
    navigate,
    theme,
    disableConfiguration,
    darkTheme,
    lightTheme,
    turnOnThemeSwitchAnimation,
    turnOffThemeSwitchAnimation }: Props) {
    const [seeMore, setSeeMore] = useState(false);
    const [seeMoreAnimation, setSeeMoreAnimation] = useState(false);

    useEffect(() => { }, [navigate.configuration, seeMore]);

    function handleOverLayerClickEvent(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        if (event.currentTarget === event.target) {
            setSeeMore(false)
            setSeeMoreAnimation(false)
            disableConfiguration()
            if (theme.switchAnimation == true) turnOffThemeSwitchAnimation()
        }
    }

    function handleSeeMoreState() {
        seeMore == false ? setTimeout(() => { setSeeMore(true) }, 200) : setTimeout(() => { setSeeMore(false) }, 200)
        handleComponentClass()
    }

    function handleComponentClass() {
        const container = document.getElementById('seeMore_container')
        const text = document.getElementById('seeMore_text')
        const img = document.getElementById('seeMore_img')

        if (seeMoreAnimation == false) {
            setSeeMoreAnimation(true)
        } else {
            setSeeMoreAnimation(false)
            if (container && text && img) {
                container.classList.add(style['seeMore--disapear'])
                text.classList.add(style['seeMore--slide_out'])
                img.classList.add(style['seeMore--slide_out'])
            }
        }
    }

    function handleAlterTheme() {
        turnOnThemeSwitchAnimation()
        theme.selectedTheme === 'dark' ? lightTheme() : darkTheme();
        // tem que salvar o tema no local storage
        // quando iniciar o app tem que verificar se existe o local storage
    }

    function handleSeeMore() {
        if (seeMore == true) {
            return (
                <div id='seeMore_container' className={style.seeMore_container} >
                    <p id='seeMore_text' className={style.seeMore_text}>Viu? Eu disse que não tinha muito pra ver aqui.</p>
                    <img id='seeMore_img' className={style.seeMore_img} src="/assets/doge.png" alt="Meme do cachorro doge." />
                </div>
            )
        }
    }

    function handleEnableConfiguration() {
        if (navigate.configuration == true) {
            return (
                <>
                    <div className={classNames({
                        [style.overLayer]: true,
                        [style["overLayer--light"]]: theme.selectedTheme === 'light',
                    })} onClick={(event) => handleOverLayerClickEvent(event)}>
                        <div className={style.container}>
                            <h3 className={style.container_title}>Configurações</h3>
                            <div className={style.theme}>
                                <p>Tema</p>
                                    <div className={style.theme_switch} onClick={handleAlterTheme}>
                                        <img className={classNames({
                                            [style.theme_switch_circle]: true,
                                            [style["theme_switch_circle--light"]]: theme.selectedTheme === 'light',
                                            [style["theme_switch_circle--light_animation"]]: (theme.selectedTheme === 'light' && theme.switchAnimation === true),
                                            [style["theme_switch_circle--dark_animation"]]: (theme.selectedTheme === 'dark' && theme.switchAnimation === true)
                                        })} src={`./assets/switch-circle-${theme.selectedTheme}.svg`} alt="" />
                                        {/* pra fazer a transição aqui precisa colocar a imagem no css */}
                                        <img src={`./assets/switch-border-${theme.selectedTheme}.svg`} alt="" />
                                    </div>

                            </div>
                            <p>Linguagem</p>
                            <p
                                className={style.seeMore}
                                onClick={handleSeeMoreState}
                            >Não tem muito o que ver por aqui...</p>
                            {handleSeeMore()}
                        </div>
                    </div>
                </>
            )
        }
    }

    return (
        <>
            {handleEnableConfiguration()}
        </>
    )
}

const mapStateToProps = (state: ApplicationState) => ({
    navigate: state.navigation,
    theme: state.theme
})

const mapDispatchToProps = (dispatch: Dispatch) => (
    bindActionCreators({
        disableConfiguration: NavigationActions.disableConfiguration,
        darkTheme: ThemeActions.darkTheme,
        lightTheme: ThemeActions.lightTheme,
        turnOnThemeSwitchAnimation: ThemeActions.turnOnThemeSwitchAnimation,
        turnOffThemeSwitchAnimation: ThemeActions.turnOffThemeSwitchAnimation
    }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Configuration)