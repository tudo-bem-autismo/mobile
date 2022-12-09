import { showErrorToast } from "../utils/errors";
import api from "./api";

export const getTasksService = async (idDependent) => {
    try {

        const result = await api.get(`/tarefa/crianca/${idDependent}`)

        const success = result.status === 200

        const formattedData = result.data.map(item => {
            return {
                idTask: +item.id_tarefa,
                hour: item.horario,
                title: item.titulo,
                idSelectedDays: +item.id_dia_semana,
                day: item.sigla,
                icon: item.icone,
                isToday: +item.hoje,
                isDone: !!+item.realizada
            }
        })

        return {
            success,
            data: formattedData
        }


    } catch (error) {
        console.log(error);
        showErrorToast(error.response.data.message)
        return {
            success: false,
            data: error.response.data
        }
    }
}

export const getHistoryTask = async (idDependent, period) => {

    try {
        const result = await api.post('/tarefa/realizacao/listagem', {
            id_crianca: idDependent,
            periodo: period
        })

        const success = result.status === 200

        result.data.map((task) => {
            const fullDate = task.data.split('T')
            const date = fullDate[0].split('-')
            const time = fullDate[1].split(':')

            task.data = date[2] + '/' + date[1] + '/' + date[0] + ' ' + (time[0] - 3)  + ':' + time[1]
        })

        return {
            success,
            data: result.data
        }
    }
    catch (error) {
        showErrorToast(error.response.data)
        return {
            success: false,
            data: error.response
        }
    }
}

export const getTaskByIdService = async (idTask) => {
    try {

        const result = await api.get(`/tarefa/${idTask}`)

        const success = result.status === 200

        const days = result.data.tbl_tarefa_dia_semana.map(item => item.tbl_dia_semana.id)

        const dependents = result.data.tbl_crianca_tarefa.map(item => {
            return item.id_crianca
        })

        const formattedData = {
            idTask: result.data.id,
            hour: result.data.horario,
            title: result.data.titulo,
            days,
            dependents,
            icon: result.data.id_icone,
        }

        return {
            success,
            data: formattedData
        }


    } catch (error) {
        console.log(error);
        showErrorToast(error.response.data.message)
        return {
            success: false,
            data: error.response.data
        }
    }
}

export const getIconsTasksService = async () => {
    try {

        const result = await api.get(`/icone`)

        const success = result.status === 200

        const formattedData = result.data.map(item => {
            return {
                id: item.id,
                icon: item.icone,
                title: item.titulo
            }
        })

        return {
            success,
            data: formattedData
        }


    } catch (error) {
        showErrorToast(error.response.data.message)
        return {
            success: false,
            data: error.response.data
        }
    }
}

export const taskIsDoneService = async (data) => {
    try {

        const formattedData = {
            id_tarefa: data.idTask,
            id_crianca: data.idDependent
        }

        const result = await api.post("/tarefa/realizacao", formattedData);

        const success = result.status === 201

        return {
            success,
            data: result.data,
        }

    } catch (error) {
        showErrorToast(error.response.data.message)
        return {
            success: false,
            data: error.response.data
        }
    }
}

export const deleteTaskService = async (idTask) => {
    try {

        const result = await api.delete(`/tarefa/${idTask}`)

        const success = result.status === 200

        return {
            success,
            data: result.data
        }

    } catch (error) {
        showErrorToast(error.response.data.message)
        return {
            success: false,
            data: error.response.data
        }
    }
}

export const updateTaskService = async (data) => {
    try {

        console.log(data)

        const formattedData = {
            id_crianca: data.selectedDependents,
            id_tarefa: data.idTask,
            titulo: data.title,
            horario: data.alarmHour,
            id_dia_semana: data.selectedDays,
            id_icone: data.idIcon
        }

        const result = await api.put("/tarefa", formattedData);

        const success = result.status === 201

        return {
            success,
            data: result.data,
        }

    } catch (error) {
        showErrorToast(error.response.data.message)
        return {
            success: false,
            data: error.response.data
        }
    }
}