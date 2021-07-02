import React,{ useState, useEffect } from 'react'
import QuotesList from './QuotesList'
import QuoteForm from './QuoteForm'

const QuotesContainer = (props) => {
    const [ quotes, setQuotes ] = useState([])

    useEffect(() => {
        const result =JSON.parse( localStorage.getItem('quotes') ) || []
        setQuotes(result)
    },[])

    useEffect(() => {
        localStorage.setItem('quotes', JSON.stringify(quotes))
    },[quotes])

    const addQuotes = (quote) => {
        const result = [ quote,...quotes ]
        setQuotes(result)
    }

    const handleRemove = (id) => {
        const result = quotes.filter((quote) => {
            return quote.id !== id
        })
        setQuotes(result)
    }

    return(
        <div>
            Quotes Container
            <QuotesList quotes={ quotes } handleRemove={ handleRemove }/>
            <QuoteForm addQuotes={ addQuotes }/>
        </div>
    )
}

export default QuotesContainer