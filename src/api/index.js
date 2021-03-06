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

    // справочник типов задач
    getTaskTypes() {
        return instance.get(`/api/${tenantguid}/TaskTypes`)
    },

    // справочник статусов
    getStatuses() {
        return instance.get(`/api/${tenantguid}/Statuses`)
    },

    // справочник приортетов
    getPriorities() {
        return instance.get(`/api/${tenantguid}/Priorities`)
    },

    // справочник сервисов
    getServices() {
        return instance.get(`/api/${tenantguid}/Services`)
    },

    // справочник тегов
    getTags() {
        return instance.get(`/api/${tenantguid}/Tags`)
    },

    // справочник пользователей
    getUsers() {
        return instance.get(`/api/${tenantguid}/Users`)
    },

    // справочник групп пользователей
    getUserGroups() {
        return instance.get(`/api/${tenantguid}/UserGroups`)
    },

    // получить заявку по id
    getTask(id) {
        return instance.get(`/api/${tenantguid}/Tasks/${id}`)
    },

    // внести изменения в заявку
    putTask(dto) {
        return instance.put(`/api/${tenantguid}/Tasks`, dto)
    },

    // создать новую заявку
    postTask(dto) {
        return instance.post(`/api/${tenantguid}/Tasks`, dto)
    },
}