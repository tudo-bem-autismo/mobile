import {showToast} from "../utils/errors"
import api from './api'

export const kidRegisterService = async (data) => {
    try {
        const formattedData = {

            "foto": null,
            "nome": data.name,
            "data_nascimento": data.date,
            "id_genero": data.genero,
            "id_nivel_autismo": data.nivelAutismo,
            "id_responsavel": 7
        }

        const result = await api.post("/crianca", formattedData);

        const sucess = result.status === 201

        return {
            sucess,
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