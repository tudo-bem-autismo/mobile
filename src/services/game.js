import { showErrorToast } from "../utils/errors"
import { getData } from "../utils/storage"
import api from "./api"

export const getGamesService = async () => {
    try {

        const idResponsible = await getData('@id')

        const result = await api.get(`/minijogo/listagem/${idResponsible}`)

        const success = result.status === 200

        const formattedData = result.data.map(item => {
            const restrictions = item.tbl_restricao.map(restriction => {
                return {
                    id: restriction.id,
                    idGame: restriction.id_mini_jogo,
                    idDependent: restriction.id_crianca
                }
            })

            return {
                id: item.id,
                name: item.nome,
                icon: item.icone,
                restrictions
            }
        })

        return {
            success,
            data: formattedData
        }

    } catch (error) {
        console.log(error)
        showErrorToast(error.response.data.message)
        return {
            success: false,
            data: error.response.data
        }
    }
}

export const getGameKids = async () =>{
    try{
        const idKid = await getData('@id')

        const result = await api.get(`minijogo/listagem/crianca/${idKid}`)

        const sucess = result.status === 200

        const formattedData = result.data.map(item =>{
            return {
                id:item.id,
                name:item.nome,
                icon:item.icone,
            }
        })

        return{
            sucess,
            data:formattedData,
        }
    }catch (error){
        console.log(error)

        showErrorToast(error.response.data.message)
        return{
            success:false,
            data: error.response.data
        }
    }

}

export const getGameByIdService = async (gameId) => {
    try {

        const result = await api.get(`/minijogo/${gameId}`)

        const success = result.status === 200

        const [game] = result.data

        const formattedData = {
            id: game.id,
            name: game.nome,
            icon: game.icone
        }

        return {
            success,
            data: formattedData,
            data: data
        }

    } catch (error) {
        console.log(error)
        showErrorToast(error.response.data.message)
        return {
            success: false,
            data: error.response.data
        }
    }
}

export const getGamesByResponsible = async () => {
    try {

        const idResponsible = await getData('@id')

        const result = await api.get(`/miniJogo/listagem/${idResponsible}`)

        const success = result.status === 200


        const formattedData = result.data.map(item => {

            const restrictions = item.tbl_restricao.map(restriction => {
                return {
                    id: restriction.id,
                    idGame: restriction.id_mini_jogo,
                    idDependent: restriction.id_crianca
                }
            })

            return {
                id: item.id,
                name: item.nome,
                icon: item.icone,
                restrictions
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

export const getStepGames = async () => {

    try{
        
        const result = await api.get(`/miniJogo/1`)
        const data = result.data[0].tbl_situacao_escolha
    

        const success = result.status === 200

        //  const formattedData = {
        //     image: result.data[0].tbl_situacao_escolha[1].imagem_exemplo,
        //     dialogo: result.data[0].tbl_situacao_escolha[1].dialogo,
        //     passo1 : result.data[0].tbl_situacao_escolha[1].tbl_passo[0].texto,
        //     passo2: result.data[0].tbl_situacao_escolha[1].tbl_passo[1].texto,
        //     corBotao: result.data[0].tbl_situacao_escolha[1].tbl_passo[1].cor,
            
        //  }

        // const formattedDataTwo = {
        //  dialogo: result.data[0].tbl_situacao_escolha[0].dialogo,
        //  imagem: result.data[0].tbl_situacao_escolha[0].tbl_passo[0].imagem,
        //  imagemDois: result.data[0].tbl_situacao_escolha[0].tbl_passo[1].imagem
        //  }

        //console.log(result.data[0])
        
        return{
                success,
                data: data
                // dataTwo: formattedDataTwo
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