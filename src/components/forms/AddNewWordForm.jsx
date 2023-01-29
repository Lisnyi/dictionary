import { Form, Formik } from "formik";
import { useMemo } from "react";
import { nanoid } from "nanoid";
import { Input } from "../index"
import initialValues from "./initialValues"
import validationSchema from "./validationSchema"

export default function AddNewWordForm({addNewWord}) {

    const wordId = useMemo(()=> nanoid(), []);
    const translateId = useMemo(()=> nanoid(), []);

    const handleSubmit = ({word, translate}, {resetForm}) => {
        console.log(word, translate)
        // addNewWord({word, translate})
        resetForm()
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            validateOnBlur={false}>
                {() => (
                    <Form autoComplete='off'>
                        <Input
                            id={wordId}
                            name="word"
                            label="New word"
                        />
                        <Input
                            id={translateId}
                            name="translate"
                            label="Translate"
                        />
                    <button type="submit">Add to dictionary</button>
                </Form>
                )}
        </Formik>
    )
}
