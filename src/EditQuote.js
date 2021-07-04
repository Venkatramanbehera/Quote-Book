import React from 'react'
import QuoteForm from './QuoteForm'

const EditQuote = (props) => {
    const { id, body, name, updateQuotes, handleToggle } = props

    const formSubmission = ( formData ) => {
        updateQuotes(formData)
    }
    return (
        <div>
            <h2>Edit Quotes</h2>
            <QuoteForm 
                id={ id } 
                body={ body } 
                name={ name }
                formSubmission={ formSubmission }
                handleToggle={ handleToggle }
            />
        </div>
    )
}

export default EditQuote
