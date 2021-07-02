import React from 'react'

const QuotesItem = (props) => {
    const { id, name, body, handleRemove } = props
    return(
        <div>
            <blockquote>{ body } - { name } </blockquote>
            <button>Edit</button>
            <button onClick={ () => {
                const confirmStatus = window.confirm('Are you sure?')
                if(confirmStatus){
                    handleRemove(id)
                }
            }}>Remove</button>
        </div>
    )
}

export default QuotesItem