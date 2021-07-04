import React,{ useState } from 'react'
import EditQuote from './EditQuote'

const QuotesItem = (props) => {
    const [ toggle, setToggle ] = useState(false)

    const { id, name, body, handleRemove, updateQuotes } = props
    
    const handleRemoveBtn = () => {
        const confirmStatus = window.confirm('Are you sure?')
        if(confirmStatus){
            handleRemove(id)
        }
    }

    const handleToggle = () => {
        setToggle(!toggle)
    }


    return(
        <div>
            {
                toggle ? (
                    <div>
                        <EditQuote 
                            id={ id } 
                            body={ body } 
                            name={ name }
                            updateQuotes={ updateQuotes }
                            handleToggle={ handleToggle }
                        />
                        <button onClick={ handleToggle }> Cancel </button>
                    </div>
                )  : (
                    <div>
                        <blockquote>{ body } - { name } </blockquote>
                        <button onClick={ handleToggle }>Edit</button>
                        <button onClick={ handleRemoveBtn }>Remove</button>
                    </div>
                )
            }
        </div>
    )
}

export default QuotesItem