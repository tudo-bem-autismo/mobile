import { showErrorToast } from "../utils/errors";
import { getData } from "../utils/storage";
import api from "./api";

export const registerButtonSupport = async (data) => {
  try {
    const options = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    //const id = await getData('@id')
    const formData = new FormData();
    formData.append("imagem", data.photo1);
    formData.append("imagem", data.photo2);
    formData.append("imagem", data.photo3);
    formData.append("imagem", data.photo4);
    formData.append("imagem", data.photo5);
    formData.append("id_crianca", data.idCrianca);

    console.log(formData)
    const result = await api.post("/botaoApoio", formData, options);

    const success = result.status === 201;

    return {
      success,
      data: result.data,
    };

  } catch (error) {
    showErrorToast(error.response.data.message);
    console.log(error)

    return {
      success: false,
      data: error.response.data,
    };
  }
};

export const getButtonSupportDependent = async () => {
  try {

    const id = await getData('@idDependent')

    const result = await api.get(`/botaoApoio/${id}`)

    const success = result.status === 200
    
    const formattedData = result.data.map(item => {
      return {
          id: item.id,
          midia: item.midia,
          nomeOriginal: item.nome_original,
          tipoMidia: item.tbl_tipo_midia.tipo
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

export const deleteMidiaButtonSupport = async (id) => {
  try {
    
    const result = await api.delete(`/botaoApoio/${id}`)

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

