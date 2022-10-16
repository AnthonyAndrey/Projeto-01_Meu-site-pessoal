import style from './NotFound.module.scss'
import { useNavigate } from 'react-router-dom'

export function NotFound() {

    const navigate = useNavigate()
    function handleRedirectToLogin() {
        navigate('/')
    }
    return (
        <div className={style.container}>
            <div className={style.image}>
                <div className={style.svg}>
                </div>
            </div>
            <div className={style.content}>
                <div className={style.title}><span>Página não encontrada!</span></div>
                <div className={style.subtitle}>
                    <span>Retorne a página </span>
                    <button className={style.link} onClick={handleRedirectToLogin}>principal</button>
                </div>
            </div>
        </div>
    )

}