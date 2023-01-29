import * as yup from 'yup';

const schema = yup.object().shape({
    word: yup.string()
        .matches(/^[a-zA-Zа-яА-ЯЁёІіЇїЄє]+$/, "Must contain only letters")
        .required(),
    translate: yup.string()
        .matches(/^[a-zA-Zа-яА-ЯЁёІіЇїЄє]+$/, "Must contain only letters")
        .required()
});

export default schema