import React from 'react';

const NewZayavka = ({setClose}) => {
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
                <textarea>
                </textarea>
            </div>
            <div className='content'>
                <p>Описание</p>
                <textarea>
                </textarea>
            </div>
            <div className='bsave'>
                <button>
                    Сохранить
                </button>
            </div>
        </div>
    )
}

export default NewZayavka;