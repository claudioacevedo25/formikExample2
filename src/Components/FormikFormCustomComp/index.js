import { Formik, Form, ErrorMessage } from 'formik';
import CheckboxInput from './CustomComponents/CheckboxInput';
import TextInput from './CustomComponents/TextInput';
import SelectInput from './CustomComponents/SelectInput';
import RadioInput from './CustomComponents/RadioInput';
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

    if(!values.radio){
        errors.radio = 'Requerido'
    }
    //propiedad del objeto que debe tener el mismo nombre que el campo que valido
    //ejemplo name = errors.name, lastname = errors.lastname
    return errors
}

const FormikFormCustomComp = () => {

    return(
        <Formik
            initialValues={{name: '', lastname: '', email: '', options: '', radio: ''}}
            validate={validate}
            onSubmit={values => console.log(values)}
        >
            <div className='mainFormikForm'>
                <h4>Ejemplo de formulario usando Formik con componentes custom</h4>
                <Form>
                    <div className='formContainer'>
                        {/* componente de input custom */}
                        <TextInput name='name' label='Nombre' autoComplete='off'/>
                        <TextInput name='lastname' label='Apellido' autoComplete='off'/>
                        <TextInput name='email' label='Email' autoComplete='off'/>
                        <br/>
                        <SelectInput label="opciones" name="options">
                            <option value="option1">opcion 1</option>
                            <option value="option2">opcion 2</option>
                            <option value="option3">opcion 3</option>
                        </SelectInput>
                        <br/>
                        <CheckboxInput name='accept'>
                            Aceptar terminos y condiciones
                        </CheckboxInput>
                        <br/>
                        <div className='radioGroup'>
                            <RadioInput name="radio" value="radio1" label="radio 1"/>
                            <RadioInput name="radio" value="radio2" label="radio 2"/>
                            <RadioInput name="radio" value="radio3" label="radio 3"/>
                        </div>
                        <ErrorMessage name="radio"/>
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

export default FormikFormCustomComp;