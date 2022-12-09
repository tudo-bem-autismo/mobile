import * as yup from 'yup';

export const kidRegisterDataSchema = yup.object().shape({
    name: yup
        .string()
        .min(4, 'No mínimo 4 caracteres')
        .max(20, 'No máximo 20 caracteres')
        .required('Insira seu nome'),
    date: yup
        .string()
        .required('Insira sua data de nascimento'),

})