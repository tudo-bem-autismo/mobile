
import axios from "axios";
import React, { useState } from "react";
import { showToast } from "../utils/errors";
import { removePhoneMask } from "../utils/masks";
import api from "./api";

export const responsibleRegisterService = async (data) => {
    try {

        const formattedData = {
            nome: data.name,
            telefone: data.phone ? removePhoneMask(data.phone) : '',
            email: data.email,
            senha: data.password
        }

        const result = await api.post("/responsavel", formattedData);

        const success = result.status === 201

        return {
            success,
            data: result.data
        }

    } catch (error) {
        showToast(error.response.data.message)
        return {
            success: false,
            data: error.response.data
        }
    }

}

export const responsibleManagementService = async () => {
    // axios.get("http://10.107.144.15:3000/responsavel/6")
    //     .then(response => {
    //         console.log(response.data)
    //     })   
    //     .catch(error => console.log(error))

        // try {

        //     const [ responsible, setResponsible ] = useState([]);
    
        //     React.useEffect( () => {
        //         const result = await api.get("/responsavel/6");

        //         console.log(result.data)
        //         setResponsible(result.data)
        
        //         const success = result.status === 201
        //     }, [])
            
        //     return {
        //         success,
        //         data: result.data,
        //     }
    
        // } catch (error) {
        //     showToast(error.response.data.message)
        //     return {
        //         success: false,
        //         data: error.response.data
        //     }
        // }
}
