import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { zayavkiAPI } from '../../api';
import { Table } from 'reactstrap';

import Spinner from '../Spinner';

import NewZayavka from './NewZayavka';

function Zayavki() {

    // справочник статусов
    const [statuses, setStatuses] = useState([]);

    // справочник приоритетов
    const [priorities, setPriorities] = useState([]);

    // список заявок
    const [zayavokList, setZayavokList] = useState([]);
    // хук для показа спиннера
    const [showSpinner, setShowSpinner] = useState(true);

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

    // загружаем список приоритетов
    useEffect(
        () => {
            async function getStatuses() {
                const pr = await zayavkiAPI.getStatuses();
                console.log('Загружаем справочник приоритетов');
                console.log(pr.data);
                setStatuses(pr.data);
            };
            getStatuses();
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
        []
    )

    return (
        <>
            {showSpinner && <Spinner />}
            <div className='zayavki-area'>
                <div>
                    <div className='button-area'>
                        <button>
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
                                            <tr key={zayavka.id}>
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
                <div className='newzayavka'>
                    <NewZayavka />
                </div>
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