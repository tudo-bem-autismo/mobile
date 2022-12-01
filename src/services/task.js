import { showErrorToast } from "../utils/errors";
import api from "./api";

export const getTasksService = async () => {
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

export const getHistoryTask = async (id, periodo) => {



    try {
        const result = await api.post('/tarefa/realizacao/listagem', {
            id_crianca: 4,
            periodo: 365
        })

        const success = result.status === 200

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
