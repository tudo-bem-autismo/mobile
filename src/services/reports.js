import { showErrorToast } from "../utils/errors";
import api from "./api";

export const getReports = async (id_crianca, id_mini_jogo, periodo) => {
    try {

        //const id = await getData('@id')

        const result = await api.get(`/crianca/perfil/relatorio/${id_crianca}/${id_mini_jogo}/${periodo}}`)

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