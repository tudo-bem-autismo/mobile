import * as yup from 'yup';
import { yupToFormErrors } from 'formik';


// Variável que cria um Schema para descrever tais tipos de dados a serem requiridos para cada campo
export const scheduleCreateTaskDataSchema = yup.object().shape({
    title: yup
        .string()
        .min(4, 'No mínimo 4 caracteres')
        .max(20, 'No máximo 20 caracteres')
        .required('Insira seu nome'),
})


