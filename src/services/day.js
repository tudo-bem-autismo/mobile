import { showErrorToast } from "../utils/errors";
import api from "./api";

export const getDaysService = async () => {
    try {

        const result = await api.get(`/diasemana`)

        const success = result.status === 200

        const formattedData = result.data.map(item => {
            return {
                id: item.id,
                initial: item.sigla
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
