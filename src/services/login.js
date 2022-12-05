import api from './api';
import { showErrorToast } from '../utils/errors';

export const responsibleLoginService = async (data) => {

    try {
        const formattedData = {
            email: data.email,
            senha: data.password
        }

        const result = await api.post("/responsavel/login", formattedData);

        const formattedResultData = {
            id: result.data.responsavel.id,
            email: result.data.responsavel.email,
            name: result.data.responsavel.nome
        }

        const sucess = result.status === 202

        return {
            sucess,
            data: formattedResultData
        }
    } catch (error) {
        // console.log(error)
        showErrorToast(error.response.data.message)
        return {
            sucess: false,
            data: error.response.data
        }
    }

}