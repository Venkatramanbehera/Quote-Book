import React,{ useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const QuoteForm = (props) => {
    const { formSubmission, id:slNo, name:author, body:quote, handleToggle } = props

    const [ name, setName ] = useState(author ? author : '')
    const [ body, setBody ] = useState(quote ? quote : '')
    const [ id, setId ] = useState( slNo ? slNo : uuidv4())

    const handleChangeName = (e) => {
        setName(e.target.value)
    }

    const handleChangeBody = (e) => {
        setBody(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            id : id,
            name : name,
            body : body
        }
        formSubmission(formData)

        // reset form
        if(handleToggle){
            handleToggle()
        }
        setName('')
        setBody('')
    }

    return(
        <div>
            <form onSubmit={ handleSubmit }>
                <label>Name</label> <br/>
                <input type="text" value={ name } onChange={ handleChangeName }/> <br/>
                <label>Body</label> <br/>
                <textarea value={ body } onChange={ handleChangeBody }></textarea> <br/>
                {
                    author ? <button>Update</button> : <input type="submit" value="save"/>
                }
            </form>
        </div>
    )
}

export default QuoteForm