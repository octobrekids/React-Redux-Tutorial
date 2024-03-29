import React from 'react'

export default function Todos({todos, deleteTodos}) {
    const todoList = todos.length ? (
        todos.map(todo => {
            return(
                <div className="collection-item" key="{todo.id}">
                    <span>{todo.content}</span>
                    <button onClick={() => {deleteTodos(todo.id)}}>Delete</button>
                </div>
            )
        })
    ) : (
        <p className="center">You have no todo's left, yay1</p>
    )
    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
}
