import React,{ useState } from 'react'
import QuotesList from './QuotesList'
import QuoteForm from './QuoteForm'

const QuotesContainer = (props) => {
    const [ quotes, setQuotes ] = useState([ ])
    return(
        <div>
            Quotes Container
            <QuotesList quotes={ quotes }/>
            <QuoteForm/>
        </div>
    )
}

export default QuotesContainer