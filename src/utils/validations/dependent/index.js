import * as yup from 'yup';

export const kidRegisterDataSchema = yup.object().shape({
    name: yup
        .string()
        .min(4, 'No mínimo 4 caracteres')
        .max(20, 'No máximo 20 caracteres')
        .required('Insira seu nome'),
    date: yup
        .string()
        .min(10, 'Insira uma data válida')
        .max(11, 'Insira um número válido')
       
})