import { showErrorToast } from "../utils/errors"
import api from "./api"

export const createDependentRestrictionsService = async (restrictions) => {
    try {

        const formattedData = restrictions.map(item => {
            return {
                id_mini_jogo: item.idGame,
                id_crianca: item.idDependent
            }
        })

        const restrictionPromises = formattedData.map(async (item) => {
            await api.post('/gerenciamento', item)
        })

        await Promise.all(restrictionPromises)

        return {
            success: true,
            data: {}
        }

    } catch (error) {
        // console.log(error)
        showErrorToast(error.response.data.message)
        return {
            success: false,
            data: error.response.data
        }
    }
}

export const deleteDependentRestrictionsService = async (restrictions) => {
    try {

        const restrictionPromises = restrictions.map(async (item) => {
            await api.delete(`/gerenciamento/${item.id}`)
        })

        await Promise.all(restrictionPromises)

        return {
            success: true,
            data: {}
        }


    } catch (error) {
        // console.log(error)
        showErrorToast(error.response.data.message)
        return {
            success: false,
            data: error.response.data
        }
    }
}