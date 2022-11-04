import { showErrorToast } from "../utils/errors";
import api from "./api";

export const getReports = async (id_crianca, id_mini_jogo, periodo) => {
    try {

        const data = {
            id_crianca: id_crianca,
            id_mini_jogo: id_mini_jogo,
            periodo: periodo
        }

        const result = await api.post(`/relatorio/listagem`, data)

        const success = result.status === 200

        const formattedData = result.data.map (item => {
            return {
                id: item.id,
                erros: item.erros,
                acertos: item.acertos,
                data: item.data
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