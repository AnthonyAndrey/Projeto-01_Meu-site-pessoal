import { Outlet } from 'react-router-dom'
import MenuItem from '../../components/MenuItem'
import style from './Menu.module.scss'
import { v4 as uuid } from 'uuid'
import Icons from '../../components/Icons'
import  Configuration  from '../Configuration';

export function Menu() {
    const { HomeIcon, DeviceIcon, ContactIcon, ChatIcon, ConfigIcon } = Icons;
   
    return (
        <div className={style.menuContainer}>
            <div className={style.menu}>
                <div className={style.menu_itens}>
                    <div className={style['item_menu']}>
                        <MenuItem key={uuid()} to='/' text='Menu' styles={style['button_menu']}>
                            <HomeIcon />
                        </MenuItem>
                    </div>
                    <div className={style['item_project']}>
                        <MenuItem key={uuid()} to='/projetos' text='Projetos' styles={style['button_project']}>
                            <DeviceIcon />
                        </MenuItem>
                    </div>
                    <div className={style['item_contact']}>
                        <MenuItem key={uuid()} to='/contatos' text='Contatos' styles={style['button_contact']}>
                            <ContactIcon />
                        </MenuItem>
                    </div>
                    <div className={style['item_about']}>
                        <MenuItem key={uuid()} to='/sobre' text='Sobre' styles={style['button_about']} >
                            <ChatIcon />
                        </MenuItem>
                    </div>
                    <div className={style['item_configuration']}>
                        <MenuItem key={uuid()} text='Configurações' styles={style['button_configuration']}>
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