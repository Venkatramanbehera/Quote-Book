import React from 'react'

const QuotesList = ( props ) => {
    const { quotes } = props
    return(
        <div>
            {
                quotes.length === 0 ? (
                    <div>
                        <h1>No Quotes Found</h1>
                        <p>Add Your First Quotes</p>
                    </div>
                ) : (
                    <div>
                        <h1>My Quotes - { quotes.length }</h1>
                    </div>
                )
            }
        </div>
    )
}

export default QuotesList