import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import * as transition from '../../components/Transitions'

export function Loading() {
    useEffect(() => {

    }, []);
    return (
        <>
            {window.location.pathname == '/' ? <transition.Initial/> : <transition.BetweenPages/>}
            <Outlet />
        </>
    )
}