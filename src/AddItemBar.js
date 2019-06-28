import React, {Component} from "react";
import {Box, Button, TextInput, Grid } from "grommet";
import { Add } from 'grommet-icons';

class AddItemBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: ''
		}
	}

	handleSubmit = (e) => {
		/* 
			This prevents the page from redirecting to itself;
			forms redirect pages on submit. Since our app is a 
			single page that loses state on reload: we need
			e.preventDefault().
		*/
		e.preventDefault();
		this.props.addTodo(this.state.title);
		this.setState({ title: '' }); //reset the state
	}

	onChange = (e) => this.setState({title: e.target.value});
	
	render() {
		return (

			<Box
				alignContent="center"
				pad="xsmall"
				height="55px"
				elevation="xsmall"
				background={{color: "light-2"}}
				round
			>
				<form onSubmit={this.handleSubmit}>
					<Grid
					fill
					rows={["flex"]}
					columns={["3/4", "1/4"]}
					areas={[
						{name: "inputText", start:[0, 0], end: [0, 0]},
						{name: "add", start: [1, 0], end: [1, 0]}
					]}
					>
						<TextInput placeholder="add something to do" gridArea="inputText" value={this.state.title} onChange={this.onChange}/>
						<Button icon={<Add />} gridArea="add" alignSelf="end" hoverIndicator={true} type="submit">Add Task</Button>
					</Grid>
				</form>
			</Box>
		)
	}
}

export default AddItemBar;
