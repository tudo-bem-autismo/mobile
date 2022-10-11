import { showErrorToast } from "../utils/errors"
import api from "./api"

export const getGamesService = async () => {
    try {

        const result = await api.get('/minijogo/')

        const success = result.status === 200

        const formattedData = result.data.map(item => {
            return {
                id: item.id,
                name: item.nome,
                icon: item.icone
            }
        })

        // console.log(formattedData)

        return {
            success,
            data: formattedData
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