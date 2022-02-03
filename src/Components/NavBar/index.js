import './styles.css';

const NavBar = () => {
    return(
        <div className='root'>
            <a href='/basicForm'>Native React Forms</a>
            <a href='/formikForm'>Formik Forms</a>
            <a href='/formikFormValidations'>Formik Forms + Validation</a>
            <a href='/formikFormLessCode'>Formik Forms Reduced Code</a>
            <a href='/formikFormComponent'>Formik Forms Component</a>
            <a href='/formikFormCustomComp'>Formik Forms Custom Component</a>
        </div>
    )
}

export default NavBar