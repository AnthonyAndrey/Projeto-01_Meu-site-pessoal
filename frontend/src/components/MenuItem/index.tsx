import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import style from './MenuItem.module.scss'
import { useNavigate } from 'react-router-dom'
import { NavigationDelay } from '../../utils/navigationDelay';

import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import * as NavigationActions from '../../store/ducks/navigation/actions'


interface DispatchProps {
    enableConfiguration(): void,
    setPage(page: string): void
}

interface OwnProps {
    children?: React.ReactNode,
    text: string,
    to?: string,
    styles: string | undefined
}

type Props = DispatchProps & OwnProps


function MenuItem({ children, text, to, styles, setPage, enableConfiguration }: Props) {
    const navigate = useNavigate()

    function handleOnClick() {
        if (to) {
            setPage(to)
            NavigationDelay(navigate, to)
        } else {
            enableConfiguration()
        }
    }

    return (
        <div className={styles}>
            <div className={style.item} onClick={handleOnClick}>
                <div className={style.icon}>{children}</div>
                <span className={style.title}>{text}</span>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch: Dispatch) => (
    bindActionCreators(NavigationActions, dispatch)
)

export default connect(null, mapDispatchToProps)(MenuItem)