import React from 'react';

class ContactTableRowCell extends React.Component {
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

export default ContactTableRowCell;