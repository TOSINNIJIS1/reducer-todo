import React, { useState } from "react"


const TodoForm = props => {
    const [state, setState] = useState('')

    const handleChange = e => {
        setState(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.addNewItem(state)
        setState('')
    }



    return (            
    
    <form onSubmit={handleSubmit}>
        <input 
            onChange={handleChange}
            type="text"
            name="todo"
            value={state}
            />
            <button> Add </button>

        </form>
        )
    }

export default TodoForm