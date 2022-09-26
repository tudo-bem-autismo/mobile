import * as yup from 'yup';

export const kidRegisterDataSchema = yup.object().shape({
    name: yup
        .string()
        .min(4, 'No mínimo 4 caracteres')
        .max(20, 'No máximo 20 caracteres')
        .required('Insira seu nome'),
    // data: yup
    //     .date()
    //     .typeError('Insira uma data')
    //     // .min(yup.ref('showMode'), 'Selecione uma data')
    //     .required('Insira uma data valída')
})