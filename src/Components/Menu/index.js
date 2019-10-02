import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import imgLogo from '../../Icons/Logo.png';
import imgBase from '../../Icons/Base.png';
import imgZayavki from '../../Icons/Zayavki.png';
import imgPeople from '../../Icons/People.png';
import imgClients from '../../Icons/Clients.png';
import imgActives from '../../Icons/Actives.png';
import imgSettings from '../../Icons/Settings.png';

const Menu = () => {
    return (
        <>
            <Nav vertical>
                <NavItem>
                    <NavLink href="#">
                        <img src={imgLogo} alt=''/>
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink href="#">
                        <div>
                            <img src={imgBase} alt=''/>
                        </div>
                        <div>
                            База знаний
                        </div>
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink href="#">
                        <div>
                            <img src={imgZayavki} alt=''/>
                        </div>
                        <div>
                            Заявки
                        </div>
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink href="#">
                        <div>
                            <img src={imgZayavki} alt=''/>
                        </div>
                        <div>
                            Заявки
                        </div>
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink href="#">
                        <div>
                            <img src={imgPeople} alt=''/>
                        </div>
                        <div>
                            Сотрудники
                        </div>
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink href="#">
                        <div>
                            <img src={imgClients} alt=''/>
                        </div>
                        <div>
                            Клиенты
                        </div>
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink href="#">
                        <div>
                            <img src={imgActives} alt=''/>
                        </div>
                        <div>
                            Активы
                        </div>
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink href="#">
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