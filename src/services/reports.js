import { showErrorToast } from "../utils/errors";
import api from "./api";
import { getData } from "../utils/storage";

export const getReports = async (acertos, erros, data, id_mini_jogo) => {
    try {
        const id_crianca = await getData('@idDependent')

        const result = await api.post(`/relatorio`, {acertos, erros, data, id_mini_jogo, id_crianca})
        const success = result.status === 200

        return {
            success,
            data: result.data,
            game: id_mini_jogo
        }

    } catch (error) {
        showErrorToast(error.response.data.message)
        return {
            success: false,
            data: error.response
        }
    }
}