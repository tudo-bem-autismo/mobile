import { format } from "date-fns";
import { showErrorToast } from "../utils/errors";
import { getData } from "../utils/storage";
import api from "./api";

export const getMedalsDependent = async () => {
  try {

    const idDependent = await getData('@idDependent')

    const result = await api.get(`/premiacao/${idDependent}`)

    const success = result.status === 200
    
    const formattedData = result.data.map(item => {
      return {
          id: item.id,
          name: item.nome,
          medal: item.medalha,
          amount: item.quantidade
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
