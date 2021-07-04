import React from 'react'
import QuotesItem from './QuotesItem'

const QuotesList = ( props ) => {
    const { quotes,handleRemove,updateQuotes } = props
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
                        {
                            quotes.map((ele) => {
                                return <QuotesItem 
                                            key={ ele.id } {...ele} 
                                            handleRemove={ handleRemove } 
                                            updateQuotes={ updateQuotes }
                                        />
                            })
                        }
                    </div>
                )
            }
        </div>
    )
}

export default QuotesList