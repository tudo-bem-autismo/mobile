import api from './api';
import { getData } from '../utils/storage';
import { showErrorToast } from "../utils/errors";

export const getStepGames = async () => {

    try{
        //const id = await getData('@id')

        const result = await api.get(`/passo/2`)

        const success = result.status === 200

        const formattedData = {
            image:result.data.imagem,
            text:result.data.texto,
            color:result.data.cor,
            stepCorrect:result.data.passo_correto,
            description:result.data.descricao,
            situationChoice:result.data.id_situacao_escolha
        }
        return{
            success,
            data:formattedData
        }
    }
    catch(error){
        showErrorToast(error.response.data.message)
        return{
            success:false,
            data:error.response.data

        }
    }
}