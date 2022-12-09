import * as yup from 'yup';

export const scheduleCreateTaskDataSchema = yup.object().shape({
    title: yup
        .string()
        .min(1, 'No mínimo 1 caracteres')
        .max(200, 'No máximo 200 caracteres')
        .required('Insira o titulo da tarefa'),
})

export const scheduleEditTaskDataSchema = yup.object().shape({
    title: yup
        .string()
        .min(1, 'No mínimo 1 caracteres')
        .max(200, 'No máximo 200 caracteres')
        .required('Insira o titulo da tarefa'),
})

