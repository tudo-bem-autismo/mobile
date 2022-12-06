import { showErrorToast } from "../utils/errors";
import api from "./api";
import { getData } from "../utils/storage";

export const getReports = async (acertos, erros, data, id_mini_jogo) => {
    try {

        
        const id_crianca = await getData('@idDependent')
        // console.log('aqui')
        // console.log(id_crianca)

        const result = await api.post(`/relatorio`, {acertos, erros, data, id_mini_jogo, id_crianca})
        const success = result.status === 200

        // console.log(result.data)

        // const formattedData = result.data
            
        // console.log(result.data)

        return {
            success,
            data: result.data
        }

    } catch (error) {
        // console.log(error)
        showErrorToast(error.response.data.message)
        return {
            success: false,
            data: error.response
        }
    }
}