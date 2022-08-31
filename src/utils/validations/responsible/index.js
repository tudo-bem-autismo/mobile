import * as yup from 'yup';

export const responsibleRegisterSchema = yup.object().shape({
    name: yup
        .string()
        .required('Insira seu nome'),
    phone: yup
        .string()
        .required('Insira o telefone'),
    email: yup
        .string()
        .email('Insira um email válido')
        .required('Insira um email'),
    password: yup
        .string()
        .required('Insira a senha')
})