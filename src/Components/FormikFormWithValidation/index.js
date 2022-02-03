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

const FormikFormWithValidation = () => {

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
            <h4>Ejemplo de formulario usando Formik basico con validaciones</h4>
            <form onSubmit={formik.handleSubmit} className='formItems'>
                <label>Nombre</label>
                <input
                    name='name'
                    type='text'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    autoComplete="off"
                />
                {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
                <label>Apellido</label>
                <input
                    name='lastname'
                    type='text'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastname}
                    autoComplete="off"
                />
                {formik.touched.lastname && formik.errors.lastname ? <div>{formik.errors.lastname}</div> : null}
                <label>Email</label>
                <input
                    name='email'
                    type='text'
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    autoComplete="off"
                />
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

export default FormikFormWithValidation;