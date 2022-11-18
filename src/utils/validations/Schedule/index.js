import * as yup from 'yup';
import { yupToFormErrors } from 'formik';


// Variável que cria um Schema para descrever tais tipos de dados a serem requiridos para cada campo
export const scheduleCreateTaskDataSchema = yup.object().shape({
    title: yup
        .string()
        .min(1, 'No mínimo 1 caracteres')
        .max(200, 'No máximo 200 caracteres')
        .required('Insira o titulo da tarefa'),
})


