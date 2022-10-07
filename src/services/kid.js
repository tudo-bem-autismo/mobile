import { format } from "date-fns";
import { showErrorToast } from "../utils/errors";
import api from "./api";

export const kidRegisterService = async (data) => {
  try {
    const options = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const date = format(data.date, "yyyy-MM-dd");

    const formData = new FormData();
    formData.append("arquivo", data.photo);
    formData.append("nome", data.name);
    formData.append("data_nascimento", date);
    formData.append("id_genero", data.genderId);
    formData.append("id_nivel_autismo", data.autismLevelId);
    formData.append("id_responsavel", 78);

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

export const getKidService = async () => {
  try {

    const result = await api.get("/crianca/1")

    const success = result.status === 200

    const formattedData = {
      name: result.data.nome,
      photo: result.data.foto,
      date: result.data.data_nascimento,
      genderId: result.data.id_genero,
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

  // console.log(data.date)
  try {

    const options = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const date = format(data.date, "yyyy-MM-dd");
    console.log(new Date('12/06/2022'))

    const formData = new FormData();
    formData.append("arquivo", data.photo);
    formData.append("nome", data.name);
    formData.append("data_nascimento", date);
    formData.append("id_genero", data.genderId);
    formData.append("id_nivel_autismo", data.autismLevelId);
    formData.append("id_responsavel", 7);

    console.log(formData)

    const result = await api.put("/crianca/1", formData, options);

    //console.log(result)

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

export const deleteKidService = async () => {
  try {

      const result = await api.delete("/crianca/2")

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
