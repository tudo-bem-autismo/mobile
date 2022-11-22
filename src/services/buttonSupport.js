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
