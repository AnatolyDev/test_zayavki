import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

import imgLogo from '../../Icons/Logo.png';
import imgBase from '../../Icons/Base.png';
import imgZayavki from '../../Icons/Zayavki.png';
import imgPeople from '../../Icons/People.png';
import imgClients from '../../Icons/Clients.png';
import imgAssets from '../../Icons/Assets.png';
import imgSettings from '../../Icons/Settings.png';

const Menu = () => {
    return (
        <>
            <Nav vertical>                
                
                    <NavItem>
                        <img src={imgLogo} alt=''/>
                    </NavItem>
                
            
                <NavLink to="/base">
                    <NavItem>
                        <div>
                            <img src={imgBase} alt=''/>
                        </div>
                        <div>
                            База знаний
                        </div>
                    </NavItem>
                </NavLink>
                
                <NavLink to="/zayavki">
                    <NavItem>
                        <div>
                            <img src={imgZayavki} alt=''/>
                        </div>
                        <div>
                            Заявки
                        </div>
                    </NavItem>
                </NavLink>
                
                <NavLink to="/people">
                    <NavItem>
                        <div>
                            <img src={imgPeople} alt=''/>
                        </div>
                        <div>
                            Сотрудники
                        </div>
                    </NavItem>
                </NavLink>
                
                <NavLink to="/clients">
                    <NavItem>
                        <div>
                            <img src={imgClients} alt=''/>
                        </div>
                        <div>
                            Клиенты
                        </div>
                    </NavItem>
                </NavLink>
                
                <NavLink to="/assets">
                    <NavItem>
                        <div>
                            <img src={imgAssets} alt=''/>
                        </div>
                        <div>
                            Активы
                        </div>
                    </NavItem>
                </NavLink>
                
                <NavLink to="/settings">
                    <NavItem>
                        <div>
                            <img src={imgSettings} alt=''/>
                        </div>
                        <div>
                            Настройки
                        </div>
                    </NavItem>
                </NavLink>
            </Nav>
        </>
    )
}

export default Menu;