import { useEffect } from 'react';
import style from './Initial.module.scss'
import { connect } from "react-redux";
import { ApplicationState } from "../../../store";
import { bindActionCreators, Dispatch } from "redux";
import * as AnimationActions from '../../../store/ducks/animation/actions'
import { AnimationState } from "../../../store/ducks/animation/types";

interface StateProps {
    animation: AnimationState
}

interface DispatchProps {
    loadEnd(): void
}

type Props = StateProps & DispatchProps


function Initial({animation,loadEnd}:Props) {

    function handleTransition() {
        setTimeout(() => loadEnd(), 1200)
    }

    useEffect(() => {
        handleTransition()
    }, []);

    return (
        <>
            {animation.load == true ? <div className={style.overLayer}></div> : <></>}
        </>
    )
}

const mapStateToProps = (state: ApplicationState) => ({
    animation: state.animation
})

const mapDispatchToProps = (dispatch: Dispatch) => (
    bindActionCreators(AnimationActions, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Initial)