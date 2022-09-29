import { showErrorToast } from "../utils/errors";
import { removePhoneMask } from "../utils/masks";
import api from "./api";

export const responsibleRegisterService = async (data) => {
    try {

        const formattedData = {
            nome: data.name,
            telefone: data.phone ? removePhoneMask(data.phone) : '',
            email: data.email,
            senha: data.password
        }

        const result = await api.post("/responsavel", formattedData);

        const success = result.status === 200

        return {
            success,
            data: result.data,
        }

    } catch (error) {

        showErrorToast(error.response.data.message)

        return {
            success: false,
            data: error.response.data
        }
    }

}

export const getResponsibleService = async () => {
    try {

        const result = await api.get("/responsavel/6")

        const success = result.status === 200

        const formattedData = {
            name: result.data.nome,
            phone: result.data.telefone,
            email: result.data.email
        }

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

export const updateResponsibleService = async (data) => {
    try {

        const formattedData = {
            nome: data.name,
            telefone: data.phone ? removePhoneMask(data.phone) : '',
            email: data.email,
        }

        const result = await api.put("/responsavel/6", formattedData)

        const success = result.status === 200

        return {
            success,
            data: result.data
        }

    } catch (error) {
        showErrorToast(error.response.data.message)
        return {
            success: false,
            data: error.response.data
        }
    }
}

export const updatePasswordResponsibleService = async (data) => {
    try {

        const formattedData = {
            senha_atual: data.currentPassword,
            senha: data.newPassword,
        }

        const result = await api.put("/responsavel/senha/78", formattedData)

        const success = result.status === 200

        return {
            success,
            data: result.data
        }

    } catch (error) {
        showErrorToast(error.response.data.message)
        return {
            success: false,
            data: error.response.data
        }
    }
}

export const deleteResponsibleService = async () => {
    try {

        const result = await api.delete("/responsavel/6")

        const success = result.status === 200

        return {
            success,
            data: result.data
        }

    } catch (error) {
        console.log(error)
        // showErrorToast(error.response.data.message)
        return {
            success: false,
            data: error.response.data
        }
    }
}

export const getResponsibleDependentsService = async () => {
    try {

        const result = await api.get("/responsavel/78")

        const sucess = result.status === 200

        const formattedData = result.data.tbl_crianca.map(item => {
            return {
                id: item.id,
                name: item.nome,
                photo: item.foto
            }
        })

        return {
            sucess,
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