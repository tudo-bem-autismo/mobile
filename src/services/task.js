import { showErrorToast } from "../utils/errors";
// import { getData } from "../utils/storage";
import api from "./api";

export const getTasksService = async (idDependent) => {
    try {

        const result = await api.get(`/tarefa/crianca/${idDependent}`)

        const success = result.status === 200

        const formattedData = result.data.map(item => {
            return {
                idTask: item.id_tarefa,
                hour: item.horario,
                title: item.titulo,
                idSelectedDays: item.id_dia_semana,
                initialsSelectedDays: item.sigla,
                icon: item.icone,
                isToday: item.hoje
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

export const getHistoryTask = async (idDependent, period) => {

    try {
        const result = await api.post('/tarefa/realizacao/listagem', {
            id_crianca: idDependent,
            periodo: period
        })

        const success = result.status === 200

        result.data.map((task) =>{
            const fullDate = task.data.split('T')
            const date = fullDate[0].split('-')
            const time = fullDate[1].split(':')

            task.data = date[2] + '/' + date[1] + '/' + date[0] + ' ' + time[0] + ':' + time[1] 
        })

        return{
            success,
            data: result.data
        }
    }
    catch(error){
        showErrorToast(error.response.data)
        return {
            success: false,
            data: error.response
        }
    }
}


export const getIconsTasksService = async () => {
    try {

        const result = await api.get(`/icone`)

        const success = result.status === 200

        const formattedData = result.data.map(item => {
            return {
                idTask: item.id_tarefa,
                hour: item.horario,
                title: item.titulo,
                idSelectedDays: item.id_dia_semana,
                initialsSelectedDays: item.sigla,
                icon: item.icone,
                isToday: item.hoje
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

        const success = result.status === 200

        return {
            success,
            data: result.data,
        }

    } catch (error) {
        console.log(error)
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
        console.log(error)
        showErrorToast(error.response.data.message)
        return {
            success: false,
            data: error.response.data
        }
    }
}

