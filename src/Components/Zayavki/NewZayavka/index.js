import React, { useState } from 'react';
import { zayavkiAPI } from '../../../api';

const NewZayavka = ({ setClose, forceUpdFunc, editNewZayavka }) => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    async function createZayavka() {

        let resolutionDatePlan = new Date();

        // +1 день к текущему моменту
        resolutionDatePlan.setDate(resolutionDatePlan.getDate() + 1);

        const body = {
            "name": name,
            "description": description,
            "comment": "",
            "price": 0,
            "taskTypeId": 0,
            "statusId": 0,
            "priorityId": 0,
            "serviceId": 0,
            "resolutionDatePlan": resolutionDatePlan.toISOString(),
            "tags": [],
            "initiatorId": 0,
            "executorId": 0,
            "executorGroupId": 0
        }
        try {
            // создаём новую заявку
            const id = await zayavkiAPI.postTask(body);
            // принудительно обновляем список заявок
            forceUpdFunc();
            // открываем вновь созданную заявку на редактирование
            editNewZayavka(id.data);
            
        } catch (error) {
            // Error 😨
            if (error.response) {
                /*
                * The request was made and the server responded with a
                * status code that falls out of the range of 2xx
                */
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                /*
                * The request was made but no response was received, `error.request`
                * is an instance of XMLHttpRequest in the browser and an instance
                * of http.ClientRequest in Node.js
                */
                console.log(error.request);
            } else {
                // Something happened in setting up the request and triggered an Error
                console.log('Error', error.message);
            }
            console.log(error);
        }
    }

    return (
        <div>
            <div className='header'>
                Новая заявка
                <button onClick={setClose}>
                    x
                </button>
            </div>
            <div className='content'>
                <p>Название</p>
                <textarea value={name} onChange={(e) => setName(e.target.value.trim())}>
                </textarea>
            </div>
            <div className='content'>
                <p>Описание</p>
                <textarea value={description} onChange={(e) => setDescription(e.target.value.trim())}>
                </textarea>
            </div>
            <div className='bsave'>
                <button onClick={createZayavka}>
                    Сохранить
                </button>
            </div>
        </div>
    )
}

export default NewZayavka;