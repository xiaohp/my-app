import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Message from './message'
import Timer from './timer'
import TodoApp from './todo'
import MarkdownEditor from './editor'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			showTimer: true,
		}
	}

	render() {
		var timer = this.state.showTimer ? <Timer /> : null
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo"/>
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
				<Message name="xiao"/>
				<Message name="hello xiao"/>
				<button onClick={this.handleToggleTimer}>开关 timer </button>
				{timer}
				<TodoApp/>
				<MarkdownEditor/>
			</div>
		);
	}

	handleToggleTimer = e => {
		var show = !this.state.showTimer
		this.setState({
			showTimer: show
		})
	}
}


export default App;
