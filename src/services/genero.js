import api from './api';

export default generos = () => {

    try {

        api.get("/genero")
        .then(
            (data)=>{
                // console.log(data)
                // if(result.status === 200){

                //     const formattedData = {
                //         genero: data.data,
                //         sigla: data.sigla
                //     }

                //     return formattedData;

                // }

                return data.data;

            }
        )

        // const success = result.status === 200

        // const formattedData = {
        //     genero: result.data.genero,
        //     sigla: result.data.sigla
        // }
        // return {
        //     success,
        //     data: formattedData
        // }
    } catch (error) {
        // return {
        //     success: false,
        //     data: error.response.data
        // }
    }
 
}