import { Form, Formik } from 'formik';
import { useMemo } from 'react';
import { nanoid } from 'nanoid';
import { CustomInput, CustomButton } from '../../index'
import { initialValues, schema } from './index'

export function AddNewWordForm({addNewWord}) {

    const wordId = useMemo(()=> nanoid(), []);
    const translateId = useMemo(()=> nanoid(), []);

    const handleSubmit = ({word, translate}, {resetForm}) => {
        addNewWord({word, translate})
        resetForm()
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={handleSubmit}
            validateOnBlur={false}>
                {() => (
                    <Form autoComplete='off'>
                        <CustomInput
                            id={wordId}
                            name="word"
                            label="Нове слово"
                        />
                        <CustomInput
                            id={translateId}
                            name="translate"
                            label="Переклад"
                        />
                    <CustomButton type="submit">Додати</CustomButton>
                </Form>
                )}
        </Formik>
    )
}
