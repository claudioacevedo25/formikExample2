import { useState } from 'react';
import './styles.css';

const BasicForm = () => {
    const [value, setValue] = useState({normal:'', texto:'', select:'', check: false, genero:'masculino'})

    const handleChange = (e) => {
        setValue((state) => ({
            ...state,
            [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
        }))
    }
    console.log('Estado del formulario', value)
    return(
        <div className="mainBasicForm">
            <h4>Ejemplo de formulario usando solo React nativo</h4>
            <input type='text' name='normal' value={value.normal} onChange={handleChange}/>
            <br/>
            <textarea name='texto' value={value.texto} onChange={handleChange}/>
            <br/>
            <select value={value.select} name="select" onChange={handleChange}>
                <option value=''>Seleccione</option>
                <option value='option1'> Opcion 1</option>
                <option value='option2'> Opcion 2</option>
                <option value='option3'> Opcion 3</option>
            </select>
            <br/>
            <p>checked <input type='checkbox' name='check' onChange={handleChange} checked={value.check}/></p>
            <br/>
            <div>
                <input
                onChange={handleChange}
                type='radio'
                value='masculino'
                name='genero'
                checked={value.genero === 'masculino'}
                /> Masculino
                <input
                onChange={handleChange}
                type='radio'
                value='femenino'
                name='genero'
                checked={value.genero === 'femenino'}
                /> Femenino
                <input
                onChange={handleChange}
                type='radio'
                value='other'
                name='genero'
                checked={value.genero === 'other'}
                /> Prefiero no decirlo
            </div>
            <h6>Abrir consola para ver el funcionamiento</h6>
        </div>
    )
};

export default BasicForm;