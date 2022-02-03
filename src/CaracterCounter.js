import { useState, useEffect } from 'react';

const CaracterCounter = () => {
  const [value, setValue] = useState('')
  const [length, setLength] = useState('')

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  useEffect(() => {
    const longitud = value.length;
    setLength(longitud);
  }, [value])

  return (
    <div>
      <textarea type='text' value={value} onChange={handleChange}></textarea>
      <h2>{length}</h2>
    </div>
  );
}

export default CaracterCounter;
