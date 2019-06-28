import React, {Component} from "react";
import Todo from "./Todo";
import AddItemBar from "./AddItemBar";
import {Box, Button, CheckBox, Heading, InfiniteScroll, Grid, Grommet } from "grommet";
import { Add, Trash } from 'grommet-icons';
import { grommet } from "grommet/themes";



class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [],
		}
	}

	removeTodo(todo) { //good
		let paramIndex = this.state.todos.findIndex(element => {return (todo === element)}); //find index of todo we're looking for
		let nextTodos = this.state.todos;
		nextTodos.splice(paramIndex, 1);
		this.setState({todos: nextTodos});
	}

	handleTodoCheck(todo) {
		let paramIndex = this.state.todos.findIndex(element => {return (todo === element)}); //find index of todo we're looking for
		let replace = this.state.todos;
		replace[paramIndex].isDone = !replace[paramIndex].isDone;
		this.setState({todos: replace});
	}

	addTodo = (msg) => { //good
		//make a todo item with this.state.inputText as the msg
		let replace = this.state.todos;
		replace.push({msg: msg, isDone: false});
		this.setState({todos: replace});
	}

	render() {
		return (
			<Grommet theme={grommet}>
				<Grid
					fill
					rows={["60px", "flex"]}
					columns={["xsmall", "fit", "xsmall"]}
					areas={[
						{name: "header", start: [1, 0], end: [1, 0]},
						{name: "list", start: [1, 1], end: [1, 1]}
					]}
				>
				<Heading gridArea="header" margin={{"top": "10px", "bottom": "0px"}} textAlign="center">Your Todo List</Heading>
				<Box
					gridArea="list"
					alignContent="center"
					gap="small"
					pad="small"
					background={{color: "brand"}}
					round
				>
					<AddItemBar addTodo={this.addTodo} />
					{/* {this.state.todos.map(todo => 
						<Todo  msg={todo.msg} isDone={todo.isDone} delete={this.removeTodo.bind(this, todo)} handleCheck={this.handleTodoCheck.bind(this, todo)}/>
					)} */}
					<InfiniteScroll items={this.state.todos}>
						{item => (
							<Todo msg={item.msg} isDone={item.isDone} delete={this.removeTodo.bind(this, item)} handleCheck={this.handleTodoCheck.bind(this, item)} />
						)}
					</InfiniteScroll>
				</Box>
				</Grid>
			</Grommet>
		)
	}
}

export default App;
