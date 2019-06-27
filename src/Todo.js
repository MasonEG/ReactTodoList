import React, {Component} from "react";
import {Box, Button, CheckBox, Grid } from "grommet";
import { Trash } from 'grommet-icons';

class Todo extends Component {

	render() {
		let tag;
		if(this.props.isDone) {
			tag = <span><del>{this.props.msg}</del></span>
		}
		else {
			tag = <span>{this.props.msg}</span>
		}
		return (
			<Box
			alignContent="center"
			elevation="xsmall"
			pad="xsmall"
			gap="small"
			background={{color: "accent-1"}}
			>
				<Grid
				fill
				rows={["flex"]}
				columns={["3/4", "1/4"]}
				areas={[
					{name: "checkbox", start:[0, 0], end: [0, 0]},
					{name: "delete", start: [1, 0], end: [1, 0]}
				]}
				>
					<CheckBox gridArea="checkbox" label={tag} checked={this.props.isDone} onChange={this.props.handleCheck}/>
					<Button gridArea="delete" icon={<Trash />} alignSelf="end" hoverIndicator={true} onClick={this.props.delete}>Delete</Button>
				</Grid>
			</Box>
		);
	}
}

export default Todo;