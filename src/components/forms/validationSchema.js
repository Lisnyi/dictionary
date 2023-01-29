import * as yup from 'yup';

const schema = yup.object().shape({
    word: yup.string()
        .matches(/^[a-zA-Zа-яА-ЯЁёІіЇїЄє\'\-]+$/, "Поле має містити тільки літери та символи(`)(-)")
        .required("Не забудьте додати слово"),
    translate: yup.string()
        .matches(/^[a-zA-Zа-яА-ЯЁёІіЇїЄє\'\-]+$/, "Поле має містити тільки літери та символи(`)(-)")
        .required("Не забудьте додати переклад")
});

export default schema