
import api from "./api";

export const responsibleRegisterService = async (data) => {

    const formattedData = {
        nome: data.name,
        telefone: data.phone,
        email: data.email,
        senha: data.password
    }

    try {

        const result = await api.post("/responsavel", formattedData);

        console.log(result)

        return await result.status === 200

    } catch (error) {
        return error
    }


}