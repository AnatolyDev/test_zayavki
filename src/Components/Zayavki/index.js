import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { zayavkiAPI } from '../../api';
import { Table } from 'reactstrap';

import Spinner from '../Spinner';

import NewZayavka from './NewZayavka';
import EditZayavka from './EditZayavka';

function Zayavki() {

    // принудительное обновление
    const [forceUpd, setForceUpd] = useState(false);

    // справочник статусов
    const [statuses, setStatuses] = useState([]);

    // справочник пользователей
    const [users, setUsers] = useState([]);

    // список заявок
    const [zayavokList, setZayavokList] = useState([]);
    // хук для показа спиннера
    const [showSpinner, setShowSpinner] = useState(true);

    // окно создания заявки
    const [showNew, setShowNew] = useState(false);

    // окно редактирования заявки
    // в хуке хранится id заявки
    const [idForEdit, setIdForEdit] = useState(undefined);

    // загружаем список статусов
    useEffect(
        () => {
            async function getStatuses() {
                const st = await zayavkiAPI.getStatuses();
                console.log('Загружаем справочник статусов');
                console.log(st.data);
                setStatuses(st.data);
            };
            getStatuses();
        },
        []
    )

    // загружаем список пользователей
    useEffect(
        () => {
            async function getUsers() {
                const u = await zayavkiAPI.getUsers();
                console.log('Загружаем справочник пользователей');
                console.log(u.data);
                setUsers(u.data);
            };
            getUsers();
        },
        []
    )

    useEffect(
        () => {
            async function getZayavki() {
                const zList = await zayavkiAPI.getZayavki();
                console.log('Запрашиваем заявки');
                console.log(zList.data.value);
                setZayavokList(zList.data.value);
                setShowSpinner(false); // скрываем спиннер
            };
            getZayavki()
        },
        [forceUpd]
    )

    return (
        <>
            {showSpinner && <Spinner />}
            <div className='zayavki-area'>
                <div className='column1'>
                    <div className='button-area'>
                        <button onClick = {() => setShowNew(true)}>
                            Создать заявку
                        </button>
                    </div>
                    <div className='table-area'>
                        
                        <Table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Название</th>
                                    <th>Статус</th>
                                    <th>Исполнитель</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    zayavokList.map(
                                        zayavka => (
                                            <tr key={zayavka.id} onClick={() => setIdForEdit(zayavka.id)}>
                                                <td>{zayavka.id}</td>
                                                <td>{zayavka.name}</td>
                                                <td>
                                                    <div style={{borderRadius: '10px', textAlign: 'center', padding: '0px 7px', color: 'white', backgroundColor: zayavka.statusRgb}}>
                                                        {zayavka.statusName}
                                                    </div>
                                                </td>
                                                <td>{zayavka.executorName}</td>
                                            </tr>
                                        )
                                    )
                                }
                            </tbody>
                        </Table>
                    </div>
                </div>

                {showNew && 
                    <div className='column2'>
                        <NewZayavka setClose={() => setShowNew(false)} />
                    </div>
                }

                {
                    idForEdit &&
                    <div className='column3'>
                        <EditZayavka id={idForEdit} statuses={statuses} users={users} setClose={() => setIdForEdit(undefined)} forceUpdFunc={() => setForceUpd(!forceUpd)} />
                    </div>
                }
            </div>
        </>
    )
}

Table.propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    size: PropTypes.string,
    bordered: PropTypes.bool,
    borderless: PropTypes.bool,
    striped: PropTypes.bool,
    dark: PropTypes.bool,
    hover: PropTypes.bool,
    responsive: PropTypes.bool,
    // Custom ref handler that will be assigned to the "ref" of the inner <table> element
    innerRef: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.string,
      PropTypes.object
    ])
};

export default Zayavki;