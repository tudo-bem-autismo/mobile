import api from './api';
import { getData } from '../utils/storage';
import { showErrorToast } from "../utils/errors";

export const getStepGames = async () => {

    try{
        //const id = await getData('@id')

        const result = await api.get(`/miniJogo/1`)

        const success = result.status === 200

        const formattedData = {
            image: result.data[0].tbl_situacao_escolha[1].imagem_exemplo,
            dialogo: result.data[0].tbl_situacao_escolha[1].dialogo,
            passo1 : result.data[0].tbl_situacao_escolha[1].tbl_passo[0].texto,
            passo2: result.data[0].tbl_situacao_escolha[1].tbl_passo[1].texto,
            corBotao: result.data[0].tbl_situacao_escolha[1].tbl_passo[1].cor,
       }

       const formattedDataTwo = {
        dialogo: result.data[0].tbl_situacao_escolha[0].tbl_passo[0].dialogo,
        imagem: result.data[0].tbl_situacao_escolha[0].tbl_passo[0].imagem,
        imagemDois: result.data[0].tbl_situacao_escolha[0].tbl_passo[1].imagem
        }

        //console.log(result.data[0].tbl_situacao_escolha[0].dialogo)
        return{
                success,
                data:formattedData,
                dataTwo: formattedDataTwo
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