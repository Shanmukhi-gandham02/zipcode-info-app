import '../styles/inputForm.css';
import { useState } from 'react';


const InputForm = ({fetchLocationData}) => {
    const [postalCode, setPostalCode] = useState("");

    const handleChange = (e) => {
        setPostalCode(e.target.value);     
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchLocationData(postalCode);
    };

  return (
    <div className='form-container'>
        <input 
            type="text"
            value={postalCode}
            onChange={handleChange} 
            required />
        <div className='label'>
            Enter postal-code
        </div>
        <span className='center'>
            <button className="submit-btn" onClick={handleSubmit} >Submit</button>
        </span>
    </div>
  )
}

export default InputForm