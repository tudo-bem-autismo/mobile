import { showErrorToast } from "../utils/errors";
import api from "./api";

export const taskRegisterService = async (data) => {
    try {

        const formattedData = {
            id_icone: data.idTask,
            titulo: data.title,
            horario: data.alarmHour,
            id_dia_semana: data.selectedDays,
            id_crianca: data.selectedDependents
        }

        const result = await api.post("/tarefa", formattedData);

        const success = result.status === 201

        return {
            success,
            data: result.data,
        }

    } catch (error) {
        //console.log(error)
        showErrorToast(error.response.data.message)

        return {
            success: false,
            data: error.response.data
        }
    }

}