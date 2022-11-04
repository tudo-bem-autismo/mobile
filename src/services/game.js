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