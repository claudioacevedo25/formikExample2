import { useFormik } from 'formik';
import './styles.css';

const FormikForm = () => {

    //objeto que nos sirve para indicar a formik parametros de configuracion
    const formik = useFormik({
        //define los valores iniciales de los inputs del formulario
        initialValues: {
            name: '',
            lastname: '',
            email: '',
        },
        //propiedad onSubmit que recibe los valores que tiene nuestro formulario
        onSubmit: values => console.log(values),
    })
    return(
        <div className='mainFormikForm'>
            <h4>Ejemplo de formulario usando Formik basico</h4>
            <form onSubmit={formik.handleSubmit} className='formItems'>
                <label>Nombre</label>
                <input
                    name='name'
                    type='text'
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />
                <label>Apellido</label>
                <input
                    name='lastname'
                    type='text'
                    onChange={formik.handleChange}
                    value={formik.values.lastname}
                />
                <label>Email</label>
                <input
                    name='email'
                    type='text'
                    onChange={formik.handleChange}
                    value={formik.values.email}
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

export default FormikForm;