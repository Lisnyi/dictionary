import { Field, ErrorMessage } from 'formik';

export default function Input({id, label, name, ...rest}) {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <Field id={id} name={name} {...rest}/>
            <ErrorMessage component="span" name={name} />
        </div>
    )
}
