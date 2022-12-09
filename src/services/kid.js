import { showErrorToast } from "../utils/errors";
import { getData } from "../utils/storage";
import api from "./api";

export const kidRegisterService = async (data) => {
  try {
    const options = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const date = data.date;

    const dataD = date.split('/')[0]
    const dataM = date.split('/')[1]
    const dataY = date.split('/')[2]


    const dataFinal = dataY + "-" + dataM + "-" + dataD

    const id = await getData('@id')

    const formData = new FormData();
    formData.append("arquivo", data.photo);
    formData.append("nome", data.name);
    formData.append("data_nascimento", dataFinal);
    formData.append("id_genero", data.genderId);
    formData.append("id_nivel_autismo", data.autismLevelId);
    formData.append("id_responsavel", id);

    const result = await api.post("/crianca", formData, options);

    const success = result.status === 201;

    return {
      success,
      data: result.data,
    };

  } catch (error) {
    showErrorToast(error.response.data.message);

    return {
      success: false,
      data: error.response.data,
    };
  }
};


export const getKidService = async (idDependent) => {
  try {

    const result = await api.get(`/crianca/${idDependent}`)

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
      gender: result.data.tbl_genero.genero,
      autismLevelId: result.data.id_nivel_autismo,


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

export const updateKidService = async (data) => {
  try {

    const options = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const dateD = data.date.split('/')[0]
    const dateM = data.date.split('/')[1]
    const dateY = data.date.split('/')[2]

    const dataFinal = dateY + '-' + dateM + '-' + dateD
    const idResponsible = await getData('@id')

    const formData = new FormData();
    formData.append("arquivo", data.photo);
    formData.append("nome", data.name);
    formData.append("data_nascimento", dataFinal);
    formData.append("id_genero", data.genderId);
    formData.append("id_nivel_autismo", data.autismLevelId);
    formData.append("id_responsavel", idResponsible);

    const result = await api.put(`/crianca/${data.idDependent}`, formData, options);

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

export const deleteKidService = async (idDependent) => {
  try {

    const result = await api.delete(`/crianca/${idDependent}`)

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
