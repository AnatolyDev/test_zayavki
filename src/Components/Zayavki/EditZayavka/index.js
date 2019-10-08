import React, { useState, useEffect } from 'react';

import { zayavkiAPI } from '../../../api';
import Spinner from '../../Spinner';

const EditZayavka = ({id, setClose}) => {

    // заявка
    const [zayavka, setZayavka] = useState(undefined);

    useEffect(
        () => {
            setZayavka(undefined);
            async function getZayavkaInfo() {
                const z = await zayavkiAPI.getTask(id);
                setZayavka(z.data);
            };
            getZayavkaInfo();
        },
        [id]
    )

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
                                        <span style={{color: 'black'}}>{zayavka.statusName}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default EditZayavka;