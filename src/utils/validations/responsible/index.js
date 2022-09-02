import * as yup from 'yup';

// Variável que cria um Schema para descrever tais tipos de dados a serem requiridos para cada campo
export const responsibleRegisterSchema = yup.object().shape({
    name: yup
        .string()
        .required('Insira seu nome'),
    phone: yup
        .string(),
    email: yup
        .string()
        .email('Insira um email válido')
        .required('Insira um email'),
    password: yup
        .string()
        .required('Insira a senha')
})