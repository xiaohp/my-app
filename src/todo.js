import React from 'react'
import './todo.css'


class TodoApp extends React.Component {
	constructor(props) {
		super(props)
		this.handleChange = this.handleChange.bind(this)
		this.state = {
			items: [],
			text: ''
		}
	}

	render() {
		var buttonTitle = '添加第 ' + (this.state.items.length + 1) + '个 todo'
		return (
			<div className="todo-div">
				<h2>TODO</h2>
				<TodoList todos={this.state.items} />
				<div>
					<input onChange={this.handleChange} value={this.state.text} placeholder="输入事项"/>
					<button onClick={this.handleSubmit}>{buttonTitle}</button>
				</div>
			</div>
		)
	}

	handleChange(e) {
		var state = {
			text: e.target.value
		}
		this.setState(state)
	}

	handleSubmit = (e) => {
		var i = {
			text: this.state.text,
			id: Date.now()
		}
		this.setState((prevState) => ({
			items: prevState.items.concat(i),
			text: ''
		}))
	}
}

class TodoList extends React.Component {
	render() {
		return (
			<ul>
				{this.props.todos.map(t => (
					<li key={t.id}>{t.text}</li>
				))}
			</ul>
		)
	}
}

export default TodoApp