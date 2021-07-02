import React,{ useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const QuoteForm = (props) => {
    const { addQuotes } = props

    const [ name, setName ] = useState('')
    const [ body, setBody ] = useState('')

    const handleChangeName = (e) => {
        setName(e.target.value)
    }

    const handleChangeBody = (e) => {
        setBody(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            id:uuidv4(),
            name:name,
            body:body
        }
        addQuotes(formData)

        // reset form
        setName('')
        setBody('')
    }

    return(
        <div>
            <h1>Add Quotes</h1>
            <form onSubmit={ handleSubmit }>
                <label>Name</label> <br/>
                <input type="text" value={ name } onChange={ handleChangeName }/> <br/>
                <label>Body</label> <br/>
                <textarea value={ body } onChange={ handleChangeBody }></textarea> <br/>
                <input type="submit" value="save"/>
            </form>
        </div>
    )
}

export default QuoteForm