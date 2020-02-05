import React from "react"

const Todo = props => {
    return (
        <div className={props.todo.completed ? 'Completed' : ''}
        onClick = {() => props.toggleItem(props.todo.id)}
        >
            <h3> {props.todo.item} </h3>
        </div>
    )
}

export default Todo