import React from 'react';
import spinner from '../../Icons/spinner.gif';

function Spinner() {
    return (
        <div>
            <img src={spinner} alt='Подождите...'/>
        </div>
    )
}

export default Spinner;