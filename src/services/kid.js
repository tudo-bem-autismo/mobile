import { format } from "date-fns";
import { showToast } from "../utils/errors";
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
    formData.append("id_responsavel", 6);

    const result = await api.post("/crianca", formData, options);

    const success = result.status === 201;

    return {
      success,
      data: result.data,
    };
  } catch (error) {
    showToast(error.response.data.message);

    return {
      success: false,
      data: error.response.data,
    };
  }
};

export const getKidService = async () => {
  try {

      const result = await api.get("/crianca/2")

      const success = result.status === 200

      // const date = format(result.data.data_nascimento, "dd-MM-yyyy");

      // console.log(date)

      const formattedData = {
          name: result.data.nome,
          photo: result.data.foto,
          date : result.data.data_nascimento,
          genderId: result.data.id_genero,
          autismLevelId: result.data.id_nivel_autismo
          
      }

      // console.log(formattedData)

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
