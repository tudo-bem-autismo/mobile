import { format } from "date-fns";
import { showErrorToast } from "../utils/errors";
import { getData } from "../utils/storage";
import api from "./api";

export const getKidService = async () => {
  try {

    const id = await getData('@idDependent')

    const result = await api.get(`/crianca/2`)

    const success = result.status === 200

    const dataNaoFormatada = result.data.data_nascimento.split('T')[0]

    const dataY = dataNaoFormatada.split('-')[0]
    const dataM = dataNaoFormatada.split('-')[1]
    const dataD = dataNaoFormatada.split('-')[2]

    const dataFinal = dataD + "/" + dataM + "/" + dataY
    
    const formattedData = {

      name: result.data.nome,
      photo: result.data.foto,
      date: dataFinal,
      genderId: result.data.id_genero,
      autismLevelId: result.data.id_nivel_autismo,
      

    }

    console.log(formattedData)

    return {
      success,
      data: formattedData
    }


  } catch (error) {
    console.log(error)
    showErrorToast(error.response.data.message)
    return {
      success: false,
      data: error.response.data
    }
  }
}
