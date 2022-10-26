import { showErrorToast } from "../utils/errors";
import { removePhoneMask } from "../utils/masks";
import { getData } from "../utils/storage";
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

        const id = await getData('@id')

        const result = await api.get(`/responsavel/${id}`)

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

        const id = await getData('@id')

        const result = await api.put(`/responsavel/${id}`, formattedData)

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

        const id = await getData('@id')

        const result = await api.put(`/responsavel/senha/${id}`, formattedData)

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

        const id = await getData('@id')

        const result = await api.delete(`/responsavel/${id}`)

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

export const getResponsibleDependentsService = async () => {
    try {

        const id = await getData('@id')

        const result = await api.get(`/responsavel/12`)

        const success = result.status === 200

        const formattedData = result.data.tbl_crianca.map(item => {
            return {
                id: item.id,
                name: item.nome,
                photo: item.foto
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