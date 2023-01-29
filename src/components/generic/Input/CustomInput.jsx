import { Field } from 'formik';
import {
    FormControl,
    FormLabel,
    Input,
    FormErrorMessage,
  } from '@chakra-ui/react'

export default function CustomInput({id, label, name, ...rest}) {
    return (
        <Field>
            {({ form }) => (
                <FormControl isInvalid={form.errors[name] && form.touched[name]}>
                    <FormLabel htmlFor={id} mb={3}>{label}</FormLabel>
                    <Field
                        as={Input}
                        id={id}
                        name={name}
                        width={80}
                        mb={(form.errors[name] && form.touched[name]) ? 0 : 3}
                        {...rest}/>
                    <FormErrorMessage
                        fontSize="12px">
                        {form.errors[name]}
                    </FormErrorMessage>
                </FormControl>
            )}
        </Field>
    )
}

