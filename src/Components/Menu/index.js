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
                    <NavLink to="#">
                        <img src={imgLogo} alt=''/>
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink to="/base">
                        <div>
                            <img src={imgBase} alt=''/>
                        </div>
                        <div>
                            База знаний
                        </div>
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink to="/zayavki">
                        <div>
                            <img src={imgZayavki} alt=''/>
                        </div>
                        <div>
                            Заявки
                        </div>
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink to="/people">
                        <div>
                            <img src={imgPeople} alt=''/>
                        </div>
                        <div>
                            Сотрудники
                        </div>
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink to="/clients">
                        <div>
                            <img src={imgClients} alt=''/>
                        </div>
                        <div>
                            Клиенты
                        </div>
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink to="/assets">
                        <div>
                            <img src={imgAssets} alt=''/>
                        </div>
                        <div>
                            Активы
                        </div>
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink to="/settings">
                        <div>
                            <img src={imgSettings} alt=''/>
                        </div>
                        <div>
                            Настройки
                        </div>
                    </NavLink>
                </NavItem>

            </Nav>
        </>
    )
}

export default Menu;