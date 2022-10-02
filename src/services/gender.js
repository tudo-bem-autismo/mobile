import { showErrorToast } from "../utils/errors"
import api from './api'

export const getGendersService = async () => {
    try {

        const result = await api.get('/genero')


        const sucess = result.status === 200

        const formattedData = result.data.map(item => {
            return {
                id: item.id,
                gender: item.genero,
            }
        })

        // console.log(formattedData)

        return {
            sucess,
            data: formattedData
        }

    } catch (error) {
        showErrorToast(error.response.data.message)

        return {
            sucess: false,
            data: error.response.data
        }
    }
} 