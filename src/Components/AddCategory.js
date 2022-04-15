import React , {useState} from 'react'
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {

    const [inputValue , setInputValue] = useState('');
    const handleInput = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if( inputValue.trim().length > 2){
            setCategories(cats => [ inputValue , ...cats ]);//Usamos un callback para no tener que pasar el categories
            setInputValue('');
        }else{

        }
    }
  return (
    
    <form onSubmit={handleSubmit}>
        <input 
            type='text'
            value={inputValue}
            onChange={ (e) => handleInput(e) }
        />
        <button type='submit'>Add</button>
    </form>
    
  )
}

AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
}
export default AddCategory;