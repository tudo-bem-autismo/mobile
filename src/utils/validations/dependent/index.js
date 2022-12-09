import * as yup from 'yup';

const min = '1900-01-01';
const max = new Date();

export const kidRegisterDataSchema = yup.object().shape({
    name: yup
        .string()
        .min(4, 'No mínimo 4 caracteres')
        .max(20, 'No máximo 20 caracteres')
        .required('Insira seu nome'),
    date: yup
        .date()
        .default(new Date(max))
        .min(min, `Insira uma data acima de ${min}`)
        .max(new Date(max), `Insira uma data de nascimento válida`)
        .required('Insira sua data de nascimento'),

})