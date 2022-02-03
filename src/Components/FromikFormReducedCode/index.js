import { useFormik } from 'formik';
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

const FormikFormReducedCode = () => {

    //objeto que nos sirve para indicar a formik parametros de configuracion
    const formik = useFormik({
        //define los valores iniciales de los inputs del formulario
        initialValues: {
            name: '',
            lastname: '',
            email: '',
        },
        validate,
        //propiedad onSubmit que recibe los valores que tiene nuestro formulario
        onSubmit: values => console.log(values),
    })
    return(
        <div className='mainFormikForm'>
            <h4>Ejemplo de formulario usando Formik basico con validaciones, reduciendo el codigo de los inputs</h4>
            <form onSubmit={formik.handleSubmit} className='formItems'>
                <label>Nombre</label>
                {/* getFieldProps devuelve un objeto que contiene las propiedades del input: name, onChange, onBlur y value */}
                <input type='text' {...formik.getFieldProps('name')} autoComplete="off"/>
                {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
                <label>Apellido</label>
                <input type='text' {...formik.getFieldProps('lastname')} autoComplete="off"/>
                {formik.touched.lastname && formik.errors.lastname ? <div>{formik.errors.lastname}</div> : null}
                <label>Email</label>
                <input type='text' {...formik.getFieldProps('email')} autoComplete="off"/>

                <button 
                    type="submit" 
                    className='acceptFormikButton'
                >
                    Aceptar
                </button>
            </form>
            <h6>Abrir consola para ver el funcionamiento</h6>
        </div>
    )
}

export default FormikFormReducedCode;