import React, { Component } from 'react'
import Todos from './Todos'
import AddTodos from './AddForm'

export default class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play mario kart'}
    ]
  }

  deleteTodos = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      todos: todos
    })
  }

  addTodos = (todo) => {
    todo.id = Math.random()
    let todos = [...this.state.todos, todo]
    this.setState({
      todos: todos
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className="center blue-text">Todo 's</h1>
        <Todos todos={this.state.todos} deleteTodos={this.deleteTodos}/>
        <AddTodos addTodos={this.addTodos} />
      </div>
    )
  }
}
