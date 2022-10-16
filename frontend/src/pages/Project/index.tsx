import { Circle } from '../../components/circle'
import style from './Project.module.scss'
export function Project() {
    return (
        <div className={style.container}>
            <h1 className={style['container_title']}>Projetos públicos</h1>

            <div className={style.project}>
            <span>Descrição</span>
                <span>Projeto: Nome do projeto</span>
                <span>Descrição: </span>
                <div>imagem-1 imagem-2 ...</div>

            </div>
        </div>
    )
}