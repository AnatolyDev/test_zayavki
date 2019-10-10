import React, { useState, useEffect } from 'react';

import { Input } from 'reactstrap';
import { zayavkiAPI } from '../../../api';
import Spinner from '../../Spinner';
import Comment from './Comment';

const EditZayavka = ({id, statuses, users, setClose, forceUpdFunc}) => {

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
            const dto = {
                "id" : id,
                "name" : zayavka.name,
                "description" : zayavka.description,
                "comment" : comment.trim(),
                "price" : zayavka.price,
                "taskTypeId" : zayavka.taskTypeId,
                "statusId" : statusID,
                "priorityId" : zayavka.priorityId,
                "serviceId" : zayavka.serviceId,
                "resolutionDatePlain" : zayavka.resolutionDatePlan,
                "tags" : zayavka.tags.map(t => t.id),
                "initiatorId" : zayavka.initiatorId,
                "executorId" : executorID,
                "executorGroupId" : zayavka.executorGroupId
            }
            await zayavkiAPI.putTask(dto);
            console.log('Сохранено');
            setClose();
            forceUpdFunc();
        }
        try {
            putTask();
            
        } catch (error) {
            console.log(error)
        }
        
    }

    function sortComments(a,b) {
        const d0 = new Date(a.createdAt);
        const d1 = new Date(b.createdAt);
        return d1 - d0;
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
                                <textarea >
                                    {zayavka.description}
                                </textarea>
                            </div>
                            <div>
                                Добавление комментария:
                            </div>
                            <div>
                                <textarea value={comment} onChange = {(e) => setComment(e.target.value)}>

                                </textarea>
                            </div>
                            <div className='bsave'>
                                <button onClick={saveChanges}>
                                    Сохранить
                                </button>
                            </div>

                            <hr />
                            <div>
                                <h5>Комментарии:</h5>
                            </div>
                            {
                                zayavka.lifetimeItems.sort(sortComments).map(
                                    comment => (
                                        <Comment key={comment.id} commentBody={comment}/>
                                    )
                                )
                            }
                        </div>
                        <div className='rightcolumn'>
                            <div className='subitem'>
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
                            <div className='subitem'>
                                <div>
                                    Заявитель
                                </div>
                                <div>
                                    <b>{zayavka.initiatorName}</b>
                                </div>
                            </div>
                        
                            <div className='subitem'>
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
                            <div className='subitem'>
                                <div>
                                    Приоритет
                                </div>
                                <div>
                                    <b>{zayavka.priorityName}</b>
                                </div>
                            </div>
                            <div className='subitem'>
                                <div>
                                    Срок
                                </div>
                                <div>
                                    <b>
                                        {(new Date(zayavka.resolutionDatePlan)).toLocaleDateString('ru', {
                                                                            day: 'numeric', month: 'short', year: 'numeric'
                                                                            }).replace(/ /g, '-')}
                                    </b>
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