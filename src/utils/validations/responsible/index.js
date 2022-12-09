import * as yup from 'yup';
import { yupToFormErrors } from 'formik';

const phoneMask = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/;
// Variável que cria um Schema para descrever tais tipos de dados a serem requiridos para cada campo
export const responsibleRegisterPersonalDataSchema = yup.object().shape({
    name: yup
        .string()
        .min(4, 'No mínimo 4 caracteres')
        .max(80, 'No máximo 80 caracteres')
        .required('Insira seu nome'),
    phone: yup
        .string()
        .min(14, 'Insira um número válido')
        .max(15, 'Insira um número válido')
})

export const responsibleRegisterLoginDataSchema = yup.object().shape({
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

export const responsibleUpdateSchema = yup.object().shape({
    name: yup
        .string()
        .min(4, 'No mínimo 4 caracteres')
        .max(80, 'No máximo 80 caracteres')
        .required('Insira seu nome'),
    phone: yup
        .string()
        .matches(phoneMask, 'Número de telefone inválido')
        .min(11, 'Insira um número válido')
        .max(15, 'Insira um número válido'),
    email: yup
        .string()
        .email('Insira um email válido')
        .required('Insira um email')
})

export const responsibleUpdatePasswordSchema = yup.object().shape({
    currentPassword: yup
        .string()
        .min(4, 'No mínimo 4 caracteres')
        .max(8, 'No máximo 8 caracteres')
        .required('Insira sua senha atual'),
    newPassword: yup
        .string()
        .min(4, 'No mínimo 4 caracteres')
        .max(8, 'No máximo 8 caracteres')
        .required('Insira sua nova senha'),
    confirmNewPassword: yup
        .string()
        .min(4, 'No mínimo 4 caracteres')
        .max(8, 'No máximo 8 caracteres')
        .required('Confime sua nova senha')
        .oneOf([yup.ref('newPassword'), null], 'Senhas não conferem')
})


export const responsiblePasswordLogoutAccountDependentSchema = yup.object().shape({
    passwordResponsible: yup
        .string()
        .required('Insira a senha do Responsável (login)'),
})