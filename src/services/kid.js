import { showToast } from "../utils/errors"
import api from './api'

export const kidRegisterService = async (data) => {
    try {
        const formattedData = {

            "foto": data.image,
            "nome": data.name,
            "data_nascimento": data.date,
            "id_genero": data.genderId,
            "id_nivel_autismo": data.autismLevelId,
            "id_responsavel": 7
        }

        const result = await api.post("/crianca", formattedData, { headers: { "Content-Type": "multipart/form-data" } });

        const success = result.status === 201

        return {
            success,
            data: result.data
        }

    } catch (error) {
        showToast(error.response.data.message)

        return {
            sucess: false,
            data: error.response.data
        }
    }


}