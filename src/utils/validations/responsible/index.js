import * as yup from 'yup';

export const responsibleLoginDataSchema = yup.object().shape({
    email: yup
        .string()
        .email('Insira um email válido')
        .required('Insira um email'),
    password: yup
        .string()
        .min(4, 'No mínimo 4 caracteres')
        .max(8, 'No máximo 8 caracteres')
        .required('Insira a senha')
})