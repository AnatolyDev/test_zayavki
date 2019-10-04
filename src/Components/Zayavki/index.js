import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { zayavkiAPI } from '../../api';
import { Table } from 'reactstrap';

import Spinner from '../Spinner';
import './style.css';

function Zayavki() {

    // список заявок
    const [zayavokList, setZayavokList] = useState([]);
    // хук для показа спиннера
    const [showSpinner, setShowSpinner] = useState(true);

    useEffect(
        () => {
            async function getZayavki() {
                console.log('Запрашиваем заявки');
                const zList = await zayavkiAPI.getZayavki();
                console.log(zList.data.value);
                setZayavokList(zList.data.value);
                setShowSpinner(false); // скрываем спиннер
            };
            getZayavki()
        },
        []
    )

    return (
        <div className='table-area'>
            {showSpinner && <Spinner />}
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
                                    <td>{zayavka.statusName}</td>
                                    <td>{zayavka.executorName}</td>
                                </tr>
                            )
                        )
                    }
                </tbody>
            </Table>
        </div>
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