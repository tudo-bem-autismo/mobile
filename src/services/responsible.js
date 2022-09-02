
import api from "./api";

export const responsibleRegisterService = async (data) => {
    try {

        const formattedData = {
            nome: data.name,
            telefone: data.phone,
            email: data.email,
            senha: data.password
        }
        
        const result = await api.post("/responsavel", formattedData);

        return result.status === 201

    } catch (error) {
        console.log(error)
        return false
    }


}