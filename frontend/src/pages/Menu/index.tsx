import { useEffect } from 'react';
import { Outlet } from 'react-router-dom'
import MenuItem from '../../components/MenuItem'
import style from './Menu.module.scss'
import { v4 as uuid } from 'uuid'

import Icons from '../../components/Icons'
import Configuration from '../Configuration';
import classNames from 'classnames';

import { connect } from "react-redux";
import { ApplicationState } from "../../store";
import { ThemeState } from "../../store/ducks/theme/types";
import { bindActionCreators, Dispatch } from "redux";
import * as AnimationActions from '../../store/ducks/animation/actions'
import { AnimationState } from "../../store/ducks/animation/types";

interface StateProps {// pode ser que seja o state que ta resetando o menu
    theme: ThemeState
    animation: AnimationState
}

interface DispatchProps {
    menuEnd(): void
}

type Props = StateProps & DispatchProps

function Menu({ theme, animation, menuEnd }: Props) {
    const { HomeIcon, DeviceIcon, ContactIcon, ChatIcon, ConfigIcon } = Icons;
//cirar uma variavel se animation.menu == true  então variavel true
    function handleTransition() {
        setTimeout(() => {
            menuEnd()
            // console.log("menu: ",animation.menu);
            // console.log("cadê a animação?????",Date.now().toLocaleString());
        }, 2300)
    }

    useEffect(() => {
        console.log("agora deveria ter funcionado",Date.now().toLocaleString());
    }, [animation.menu]);
    useEffect(() => {
        console.log("menu: ",animation.menu);
        
        console.log("vai começar a animação",Date.now().toLocaleString());
        handleTransition()
    }, []);

    return (
        <div className={style.menuContainer}>
            <div className={
                classNames({
                    [style.menu]: true,
                    [style['menu--light']]: theme.selectedTheme === 'light',
                })
            }>
                <div className={style.menu_itens}>
                    <div className={classNames({ [style['item_menu']]: animation.menu === true })}>
                        <MenuItem key={uuid()} to='/' text='Menu' styles={classNames({ [style['button_menu']]: animation.menu === true })}>
                            <HomeIcon />
                        </MenuItem>
                    </div>
                    <div className={classNames({ [style['item_project']]: animation.menu === true })}>
                        <MenuItem key={uuid()} to='/projetos' text='Projetos' styles={classNames({ [style['button_project']]: animation.menu === true })}>
                            <DeviceIcon />
                        </MenuItem>
                    </div>
                    <div className={classNames({ [style['item_contact']]: animation.menu === true })}>
                        <MenuItem key={uuid()} to='/contatos' text='Contatos' styles={classNames({ [style['button_contact']]: animation.menu === true })}>
                            <ContactIcon />
                        </MenuItem>
                    </div>
                    <div className={classNames({ [style['item_about']]: animation.menu === true })}>
                        <MenuItem key={uuid()} to='/sobre' text='Sobre' styles={classNames({ [style['button_about']]: animation.menu === true })} >
                            <ChatIcon />
                        </MenuItem>
                    </div>
                    <div className={classNames({ [style['item_configuration']]: animation.menu === true })}>
                        <MenuItem key={uuid()} text='Configurações' styles={classNames({ [style['button_configuration']]: animation.menu === true })}>
                            <ConfigIcon />
                        </MenuItem>
                    </div>
                </div>
            </div>
            <div className={style.content}>
                <Configuration />
                <Outlet />
            </div>
        </div>
    )
}

const mapStateToProps = (state: ApplicationState) => ({
    theme: state.theme,
    animation: state.animation
})

const mapDispatchToProps = (dispatch: Dispatch) => (
    bindActionCreators(AnimationActions, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
