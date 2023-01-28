import { useEffect } from 'react';
import { connect } from "react-redux";
import { ApplicationState } from "../../store";
import { ThemeState } from "../../store/ducks/theme/types";
import style from "./Icons.module.scss"

interface StateProps {// pode ser que seja o state que ta resetando o menu
    theme: ThemeState
}

interface IconProps {
    size?: number
}

type Props = StateProps & IconProps

function handleIconColor(theme:ThemeState) {
    if (theme.selectedTheme==="dark") return "#FFFFFF"
    else return "#000000"
}


function HomeIcon({ theme, size }: Props) {
    useEffect(() => {
        console.log("ta renderizando aaaaaaa");
    }, []);
    function handleSize() {
        switch (size) {
            case 36:
                return <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="36px" viewBox="0 0 24 24" width="36px" className={style.icon} fill={handleIconColor(theme)}><path d="M0,0h24v24H0V0z" fill="none" /><path d="M4,18h11c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H4c-0.55,0-1,0.45-1,1v0C3,17.55,3.45,18,4,18z M4,13h8c0.55,0,1-0.45,1-1v0 c0-0.55-0.45-1-1-1H4c-0.55,0-1,0.45-1,1v0C3,12.55,3.45,13,4,13z M3,7L3,7c0,0.55,0.45,1,1,1h11c0.55,0,1-0.45,1-1v0 c0-0.55-0.45-1-1-1H4C3.45,6,3,6.45,3,7z M20.3,14.88L17.42,12l2.88-2.88c0.39-0.39,0.39-1.02,0-1.41l0,0 c-0.39-0.39-1.02-0.39-1.41,0l-3.59,3.59c-0.39,0.39-0.39,1.02,0,1.41l3.59,3.59c0.39,0.39,1.02,0.39,1.41,0l0,0 C20.68,15.91,20.69,15.27,20.3,14.88z" /><path d="M0,0h24v24H0V0z" fill="none" /></svg>
            case 48:
                return <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="48px" viewBox="0 0 24 24" width="48px" className={style.icon} fill={handleIconColor(theme)}><path d="M0,0h24v24H0V0z" fill="none" /><path d="M4,18h11c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H4c-0.55,0-1,0.45-1,1v0C3,17.55,3.45,18,4,18z M4,13h8c0.55,0,1-0.45,1-1v0 c0-0.55-0.45-1-1-1H4c-0.55,0-1,0.45-1,1v0C3,12.55,3.45,13,4,13z M3,7L3,7c0,0.55,0.45,1,1,1h11c0.55,0,1-0.45,1-1v0 c0-0.55-0.45-1-1-1H4C3.45,6,3,6.45,3,7z M20.3,14.88L17.42,12l2.88-2.88c0.39-0.39,0.39-1.02,0-1.41l0,0 c-0.39-0.39-1.02-0.39-1.41,0l-3.59,3.59c-0.39,0.39-0.39,1.02,0,1.41l3.59,3.59c0.39,0.39,1.02,0.39,1.41,0l0,0 C20.68,15.91,20.69,15.27,20.3,14.88z" /><path d="M0,0h24v24H0V0z" fill="none" /></svg>
            default:
                return <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" className={style.icon} fill={handleIconColor(theme)}><path d="M0,0h24v24H0V0z" fill="none" /><path d="M4,18h11c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H4c-0.55,0-1,0.45-1,1v0C3,17.55,3.45,18,4,18z M4,13h8c0.55,0,1-0.45,1-1v0 c0-0.55-0.45-1-1-1H4c-0.55,0-1,0.45-1,1v0C3,12.55,3.45,13,4,13z M3,7L3,7c0,0.55,0.45,1,1,1h11c0.55,0,1-0.45,1-1v0 c0-0.55-0.45-1-1-1H4C3.45,6,3,6.45,3,7z M20.3,14.88L17.42,12l2.88-2.88c0.39-0.39,0.39-1.02,0-1.41l0,0 c-0.39-0.39-1.02-0.39-1.41,0l-3.59,3.59c-0.39,0.39-0.39,1.02,0,1.41l3.59,3.59c0.39,0.39,1.02,0.39,1.41,0l0,0 C20.68,15.91,20.69,15.27,20.3,14.88z" /><path d="M0,0h24v24H0V0z" fill="none" /></svg>

        }
    }
    return (
        <>{handleSize()}</>
    )
}

function WorkIcon({ theme, size }: Props) {

    function handleSize() {
        switch (size) {
            case 36:
                return <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" className={style.icon} fill={handleIconColor(theme)}><path d="M0 0h24v24H0V0z" fill="none" /><path d="M14 6V4h-4v2h4zM4 9v9c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1zm16-3c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2l.01-11c0-1.11.88-2 1.99-2h4V4c0-1.11.89-2 2-2h4c1.11 0 2 .89 2 2v2h4z" /></svg>
            case 48:
                return <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" className={style.icon} fill={handleIconColor(theme)}><path d="M0 0h24v24H0V0z" fill="none" /><path d="M14 6V4h-4v2h4zM4 9v9c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1zm16-3c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2l.01-11c0-1.11.88-2 1.99-2h4V4c0-1.11.89-2 2-2h4c1.11 0 2 .89 2 2v2h4z" /></svg>
            default:
                return <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" className={style.icon} fill={handleIconColor(theme)}><path d="M0 0h24v24H0V0z" fill="none" /><path d="M14 6V4h-4v2h4zM4 9v9c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1zm16-3c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2l.01-11c0-1.11.88-2 1.99-2h4V4c0-1.11.89-2 2-2h4c1.11 0 2 .89 2 2v2h4z" /></svg>
        }
    }
    return (
        <>{handleSize()}</>
    )
}

function DeviceIcon({ theme, size }: Props) {
    function handleSize() {
        switch (size) {
            case 36:
                return <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" className={style.icon} fill={handleIconColor(theme)}><path d="M0 0h24v24H0V0z" fill="none" /><path d="M4 7c0-.55.45-1 1-1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-1.1 0-2 .9-2 2v11h-.5c-.83 0-1.5.67-1.5 1.5S.67 20 1.5 20H14v-3H4V7zm19 1h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z" /></svg>
            case 48:
                return <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" className={style.icon} fill={handleIconColor(theme)}><path d="M0 0h24v24H0V0z" fill="none" /><path d="M4 7c0-.55.45-1 1-1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-1.1 0-2 .9-2 2v11h-.5c-.83 0-1.5.67-1.5 1.5S.67 20 1.5 20H14v-3H4V7zm19 1h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z" /></svg>
            default:
                return <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" className={style.icon} fill={handleIconColor(theme)}><path d="M0 0h24v24H0V0z" fill="none" /><path d="M4 7c0-.55.45-1 1-1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-1.1 0-2 .9-2 2v11h-.5c-.83 0-1.5.67-1.5 1.5S.67 20 1.5 20H14v-3H4V7zm19 1h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z" /></svg>
        }
    }
    return (
        <>{handleSize()}</>
    )
}

function ContactIcon({ theme, size }: Props) {
    function handleSize() {
        switch (size) {
            case 36:
                return <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" className={style.icon} fill={handleIconColor(theme)}><path d="M0 0h24v24H0V0z" fill="none" /><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-1 14H5c-.55 0-1-.45-1-1V8l6.94 4.34c.65.41 1.47.41 2.12 0L20 8v9c0 .55-.45 1-1 1zm-7-7L4 6h16l-8 5z" /></svg>
            case 48:
                return <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" className={style.icon} fill={handleIconColor(theme)}><path d="M0 0h24v24H0V0z" fill="none" /><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-1 14H5c-.55 0-1-.45-1-1V8l6.94 4.34c.65.41 1.47.41 2.12 0L20 8v9c0 .55-.45 1-1 1zm-7-7L4 6h16l-8 5z" /></svg>
            default:
                return <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" className={style.icon} fill={handleIconColor(theme)}><path d="M0 0h24v24H0V0z" fill="none" /><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-1 14H5c-.55 0-1-.45-1-1V8l6.94 4.34c.65.41 1.47.41 2.12 0L20 8v9c0 .55-.45 1-1 1zm-7-7L4 6h16l-8 5z" /></svg>
        }
    }
    return (
        <>{handleSize()}</>
    )
}

function ChatIcon({ theme, size }: Props) {
    function handleSize() {
        switch (size) {
            case 36:
                return <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="36px" viewBox="0 0 24 24" width="36px" className={style.icon} fill={handleIconColor(theme)}><g><rect fill="none" height="24" width="24" /></g><g><g enableBackground="new"><path d="M20,4v12H5.17L4,17.17V4H20 M20,2H4C2.9,2,2,2.9,2,4v15.59c0,0.89,1.08,1.34,1.71,0.71L6,18h14c1.1,0,2-0.9,2-2V4 C22,2.9,21.1,2,20,2L20,2z" /></g></g></svg>
            case 48:
                return <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="48px" viewBox="0 0 24 24" width="48px" className={style.icon} fill={handleIconColor(theme)}><g><rect fill="none" height="24" width="24" /></g><g><g enableBackground="new"><path d="M20,4v12H5.17L4,17.17V4H20 M20,2H4C2.9,2,2,2.9,2,4v15.59c0,0.89,1.08,1.34,1.71,0.71L6,18h14c1.1,0,2-0.9,2-2V4 C22,2.9,21.1,2,20,2L20,2z" /></g></g></svg>
            default:
                return <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" className={style.icon} fill={handleIconColor(theme)}><g><rect fill="none" height="24" width="24" /></g><g><g enableBackground="new"><path d="M20,4v12H5.17L4,17.17V4H20 M20,2H4C2.9,2,2,2.9,2,4v15.59c0,0.89,1.08,1.34,1.71,0.71L6,18h14c1.1,0,2-0.9,2-2V4 C22,2.9,21.1,2,20,2L20,2z" /></g></g></svg>
        }
    }
    return (
        <>{handleSize()}</>
    )
}

function ConfigIcon({ theme, size }: Props) {
    function handleSize() {
        switch (size) {
            case 36:
                return <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" className={style.icon} fill={handleIconColor(theme)}><path d="M0 0h24v24H0V0z" fill="none" /><path d="M3 18c0 .55.45 1 1 1h5v-2H4c-.55 0-1 .45-1 1zM3 6c0 .55.45 1 1 1h9V5H4c-.55 0-1 .45-1 1zm10 14v-1h7c.55 0 1-.45 1-1s-.45-1-1-1h-7v-1c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1zM7 10v1H4c-.55 0-1 .45-1 1s.45 1 1 1h3v1c0 .55.45 1 1 1s1-.45 1-1v-4c0-.55-.45-1-1-1s-1 .45-1 1zm14 2c0-.55-.45-1-1-1h-9v2h9c.55 0 1-.45 1-1zm-5-3c.55 0 1-.45 1-1V7h3c.55 0 1-.45 1-1s-.45-1-1-1h-3V4c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1z" /></svg>
            case 48:
                return <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" className={style.icon} fill={handleIconColor(theme)}><path d="M0 0h24v24H0V0z" fill="none" /><path d="M3 18c0 .55.45 1 1 1h5v-2H4c-.55 0-1 .45-1 1zM3 6c0 .55.45 1 1 1h9V5H4c-.55 0-1 .45-1 1zm10 14v-1h7c.55 0 1-.45 1-1s-.45-1-1-1h-7v-1c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1zM7 10v1H4c-.55 0-1 .45-1 1s.45 1 1 1h3v1c0 .55.45 1 1 1s1-.45 1-1v-4c0-.55-.45-1-1-1s-1 .45-1 1zm14 2c0-.55-.45-1-1-1h-9v2h9c.55 0 1-.45 1-1zm-5-3c.55 0 1-.45 1-1V7h3c.55 0 1-.45 1-1s-.45-1-1-1h-3V4c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1z" /></svg>
            default:
                return <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" className={style.icon} fill={handleIconColor(theme)}><path d="M0 0h24v24H0V0z" fill="none" /><path d="M3 18c0 .55.45 1 1 1h5v-2H4c-.55 0-1 .45-1 1zM3 6c0 .55.45 1 1 1h9V5H4c-.55 0-1 .45-1 1zm10 14v-1h7c.55 0 1-.45 1-1s-.45-1-1-1h-7v-1c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1zM7 10v1H4c-.55 0-1 .45-1 1s.45 1 1 1h3v1c0 .55.45 1 1 1s1-.45 1-1v-4c0-.55-.45-1-1-1s-1 .45-1 1zm14 2c0-.55-.45-1-1-1h-9v2h9c.55 0 1-.45 1-1zm-5-3c.55 0 1-.45 1-1V7h3c.55 0 1-.45 1-1s-.45-1-1-1h-3V4c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1z" /></svg>
        }
    }
    return (
        <>{handleSize()}</>
    )
}

// function Icon({theme,size}:Props ) {
//     function handleSize() {
//         switch (size) {
//             case 36:
//                 return <svg></svg>
//             case 48:
//                 return <svg></svg>
//             default:
//                 return <svg></svg>
//         }
//     }
//     return (
//         <>{handleSize()}</>
//     )
// }

const mapStateToProps = (state: ApplicationState) => ({
    theme: state.theme
})

export default {
    HomeIcon: connect(mapStateToProps)(HomeIcon),
    WorkIcon:connect(mapStateToProps)(WorkIcon),
    DeviceIcon:connect(mapStateToProps)(DeviceIcon),
    ContactIcon:connect(mapStateToProps)(ContactIcon),
    ChatIcon:connect(mapStateToProps)(ChatIcon),
    ConfigIcon:connect(mapStateToProps)(ConfigIcon)
}

