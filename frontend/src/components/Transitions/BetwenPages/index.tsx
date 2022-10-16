import { useEffect, useState } from 'react';
import style from './BetweenPages.module.scss'
import { connect } from "react-redux";
import { ApplicationState } from "../../../store";
import { bindActionCreators, Dispatch } from "redux";
import * as AnimationActions from '../../../store/ducks/animation/actions'
import { AnimationState } from "../../../store/ducks/animation/types";

interface StateProps {
    animation: AnimationState
}

interface DispatchProps {
    transitionEnd(): void
}

type Props = StateProps & DispatchProps


function BetweenPages({animation,transitionEnd}:Props) {
    const [endTransition, setEndTransition] = useState(false);
    function handleTransition() {
        setTimeout(() => setEndTransition(true), 1200)
    }

    useEffect(() => {
        handleTransition()
    }, []);

    return (
        <>
            {endTransition == false ? <div className={style.overLayer}></div> : <></>}
        </>
    )
}


const mapStateToProps = (state: ApplicationState) => ({
    animation: state.animation
})

const mapDispatchToProps = (dispatch: Dispatch) => (
    bindActionCreators(AnimationActions, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(BetweenPages)