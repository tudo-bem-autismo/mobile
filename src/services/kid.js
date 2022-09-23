import { showToast } from "../utils/errors"
import api from './api'

export const kidRegisterService = async (data) => {
    try {    

        console.log(data.photo)

        const headers =  {
            'headers': {
                "Content-Type": "application/x-www-form-urlencoded" 
            }
        }

        // const formData = new FormData();
        // // formData.append('arquivo', data.photo.uri);
        // formData.append('nome', data.name);
        // formData.append('data_nascimento', data.date);
        // formData.append('id_genero', data.genderId);
        // formData.append('id_nivel_autismo', data.autismLevelId);
        // formData.append('id_responsavel', 11);

        const formattedData = {

            "arquivo": data.photo.uri,
            "nome": data.name,
            "data_nascimento": data.date,
            "id_genero": data.genderId,
            "id_nivel_autismo": data.autismLevelId,
            "id_responsavel": 11
        }

        const result = await api.post("/crianca", formattedData, headers);

        const success = result.status === 201

        return {
            success,
            data: result.data
        }

    } catch (error) {
        console.log(error)
        showToast(error.response.data.message)

        return {
            sucess: false,
            data: error.response.data
        }
    }


}