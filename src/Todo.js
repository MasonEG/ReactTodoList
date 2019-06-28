import React, {Component} from "react";
import {Box, Button, CheckBox, Grid, Paragraph } from "grommet";
import { Trash } from 'grommet-icons';

class Todo extends Component {

	render() {
		let tag;
		if(this.props.isDone) {
			tag = <span><Paragraph><del>{this.props.msg}</del></Paragraph></span>
		}
		else {
			tag = <span><Paragraph>{this.props.msg}</Paragraph></span>
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
				columns={["flex", "40px"]}
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