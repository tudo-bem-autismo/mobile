import { showToast } from "../utils/errors"
import api from './api'

export const getAutismLevelsService = async () => {
    try {

        const result = await api.get('/nivelAutismo')

        const sucess = result.status === 200

        const formattedData = result.data.map(item => {
            return {
                id: item.id,
                description: item.descricao,
            }
        })

        return {
            sucess,
            data: formattedData
        }

    } catch (error) {
        showToast(error.response.data.message)

        return {
            sucess: false,
            data: error.response.data
        }
    }
} 