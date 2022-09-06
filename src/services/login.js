import api from './api';

export const responsibleLoginService = async (data) => {
    
    try {
        const formattedData = {
            email: data.email,
            senha: data.password
        }
        console.log(formattedData)
        const result = await api.post("/responsavel/login/email", formattedData);

        console.log(result.body)

        return result.status === 202
    } catch (error) {
        console.log(error)
        return false
    }

}