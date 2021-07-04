import React from 'react'
import QuoteForm from './QuoteForm'

const AddQuote = (props) => {
    const { addQuotes } = props

    const formSubmission = (formData) => {
        addQuotes(formData)
    }
    return (
        <div>
            <h1>Add Quotes</h1>
            <QuoteForm formSubmission={ formSubmission }/>
        </div>
    )
}

export default AddQuote