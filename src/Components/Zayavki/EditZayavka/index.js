import React, { useState, useEffect } from 'react';

import { Input } from 'reactstrap';
import { zayavkiAPI } from '../../../api';
import Spinner from '../../Spinner';

const EditZayavka = ({id, statuses, users, setClose}) => {

    // заявка
    const [zayavka, setZayavka] = useState(undefined);

    // добавленный комментарий
    const [comment, setComment] = useState('');

    // выбранный статус
    const [statusID, setStatusID] = useState(undefined);

    // выбранный исполнитель
    const [executorID, setExecutorID] = useState(undefined);

    useEffect(
        () => {
            setZayavka(undefined);
            async function getZayavkaInfo() {
                const z = await zayavkiAPI.getTask(id);
                setZayavka(z.data);
                // выбранный статус
                setStatusID(z.data.statusId);
                // исполнитель
                setExecutorID(z.data.executorId);
            };
            getZayavkaInfo();
        },
        [id]
    )

    const saveChanges = () => {
        async function putTask() {
            
        }
    }

    return (
        <div>
            {
                !zayavka &&
                <Spinner />
            }
            {
                zayavka &&
                <div>                 
                    <div className='header'>
                        <div className='id'>
                            № {zayavka.id}
                        </div>
                        <div className='title'>
                            <p>{zayavka.name}</p>
                        </div>
                        <button onClick={setClose}>
                            x
                        </button>
                    </div>
                    <div className='zbody'>
                        <div className='leftcolumn'>
                            Описание
                            <div>
                                <textarea>
                                    {zayavka.description}
                                </textarea>
                            </div>
                            <div className='bsave'>
                                <button>
                                    Сохранить
                                </button>
                            </div>
                        </div>
                        <div className='rightcolumn'>
                            <div>
                                <ul>
                                    <li style={{color: zayavka.statusRgb}}>
                                        <Input type="select" name="selectStatus" value={statusID} onChange={e => {setStatusID(e.target.value)}}>
                                            {statuses.map(
                                                status => (
                                                    <option key={status.id} value={status.id}>
                                                        {status.name}
                                                    </option>
                                                )
                                            )}
                                        </Input>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <div>
                                    Заявитель
                                </div>
                                <div>
                                    <b>{zayavka.initiatorName}</b>
                                </div>
                            </div>
                            <div>
                                <div>
                                    Создана
                                </div>
                                <div>
                                    <b>{zayavka.createdAt}</b>
                                </div>
                            </div>
                            <div>
                                <div>
                                    Исполнитель
                                </div>
                                <div>
                                    <Input type="select" name="selectExecutor" value={executorID} onChange={e => {setExecutorID(e.target.value)}}>
                                            {users.map(
                                                user => (
                                                    <option key={user.id} value={user.id}>
                                                        {user.name}
                                                    </option>
                                                )
                                            )}
                                        </Input>
                                </div>
                            </div>
                            <div>
                                <div>
                                    Приоритет
                                </div>
                                <div>
                                    <b>{zayavka.priorityName}</b>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default EditZayavka;