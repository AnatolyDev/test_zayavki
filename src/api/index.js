import axios from 'axios';

const tenantguid = "f5bc8d5c-c316-493d-9962-3c89161968d0";

const instance =  axios.create(
        {
            baseURL: 'http://intravision-task.test01.intravision.ru',
            timeout : 5000,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
    )

export const zayavkiAPI = {
    getZayavki() {
        // получим список всех заявок
        return instance.get('/odata/tasks?tenantguid='+tenantguid)
    },

    // справочник приоритетов
    getPriorities() {
        return instance.get(`/api/${tenantguid}/Priorities`)
    },

    // справочник статусов
    getStatuses() {
        return instance.get(`/api/${tenantguid}/Statuses`)
    },
}