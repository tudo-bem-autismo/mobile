
import { showToast } from "../utils/errors";
import { removePhoneMask } from "../utils/masks";
import api from "./api";

export const responsibleRegisterService = async (data) => {
    try {

        const formattedData = {
            nome: data.name,
            telefone: data.phone ? removePhoneMask(data.phone) : '',
            email: data.email,
            senha: data.password
        }

        const result = await api.post("/responsavel", formattedData);

        const success = result.status === 201

        return {
            success,
            data: result.data
        }

    } catch (error) {
        showToast(error.response.data.message)
        return {
            success: false,
            data: error.response.data
        }
    }


}