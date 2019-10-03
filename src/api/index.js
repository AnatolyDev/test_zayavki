import axios from 'axios';

const tenantguid = "2e23783c-32dc-421f-97e2-9d34e536f5e1";

const instance =  axios.create(
        {
            baseURL: 'http://intravision-task.test01.intravision.ru/api',
            timeout : 5000,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
    )

export const zayavkiAPI = {
    getZayavki() {

    }
}