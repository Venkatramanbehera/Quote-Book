import React,{ useState, useEffect } from 'react'
import QuotesList from './QuotesList'
import AddQuote from './AddQuote'

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

    const updateQuotes = (quote) => {
        const result = quotes.map((q) => {
            if( q.id === quote.id){
                return { ...q, ...quote}
            }else{
                return {...q}
            }
        })
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
            <QuotesList 
                quotes={ quotes } 
                handleRemove={ handleRemove }
                updateQuotes={ updateQuotes }
            />
            <AddQuote addQuotes={ addQuotes }/>
        </div>
    )
}

export default QuotesContainer