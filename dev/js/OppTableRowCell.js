import React from 'react';

class OppTableRowCell extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<td>
				<div className="slds-truncate">{this.props.Value}</div>
			</td>
		);
	}
}

export default OppTableRowCell;