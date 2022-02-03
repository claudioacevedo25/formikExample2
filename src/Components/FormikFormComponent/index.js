import { Formik, Form, Field, ErrorMessage } from 'formik';
import './styles.css';

const validate = (values) => {
    const errors = {}
    if(!values.name){
        errors.name = 'Campo requerido'
    }else if (values.name.length < 5){
        errors.name = 'Nombre muy corto'
    }

    if(!values.lastname){
        errors.lastname = 'Campo requerido'
    }else if (values.lastname.length < 5){
        errors.lastname = 'Apellido muy corto'
    }
    //propiedad del objeto que debe tener el mismo nombre que el campo que valido
    //ejemplo name = errors.name, lastname = errors.lastname
    return errors
}

const FormikFormComponent = () => {

    return(
        <Formik
            initialValues={{name: '', lastname: '', email: '',}}
            validate={validate}
            onSubmit={values => console.log(values)}
        >
            <div className='mainFormikForm'>
                <h4>Ejemplo de formulario usando Formik con Componente en lugar de hooks como en ejemplos anteriores</h4>
                <Form>
                    <div className='formContainer'>
                        <label>Nombre</label>
                        <Field name='name' type='text' autoComplete='off'/>
                        <ErrorMessage name='name'/>
                        <label>TextArea Example</label>
                        <Field name='textarea' as='textarea' autoComplete='off'/>
                        <label>Select Example</label>
                        <Field name='select' as='select'>
                            <option value='option1'>option 1</option>
                            <option value='option2'>option 2</option>
                            <option value='option3'>option 3</option>
                        </Field>
                        <label>Apellido</label>
                        <Field name='lastname' type='text' autoComplete='off'/>
                        <ErrorMessage name='lastname'/>
                        <label>Email</label>
                        <Field name='email' type='text' autoComplete='off'/>
                        <ErrorMessage name='email'/>
                        <button
                            type="submit"
                            className='acceptFormikButton'
                        >
                            Aceptar
                        </button>
                    </div>
                </Form>
                <h6>Abrir consola para ver el funcionamiento</h6>
            </div>
        </Formik>
    )
}

export default FormikFormComponent;