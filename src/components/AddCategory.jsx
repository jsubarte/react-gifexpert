import { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => 
{
    
    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({ target }) =>{
        setInputValue(target.value)
    }

    const onSubmitForm = ( event ) => {
        event.preventDefault()
        const dato = inputValue.trim()
        if( dato.length <= 1 ) return
        onNewCategory(dato)
        setInputValue('')
    }

    return (
        <form onSubmit={ onSubmitForm }>
            <input 
                type="text" 
                placeholder="Buscar Gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
  )
}
