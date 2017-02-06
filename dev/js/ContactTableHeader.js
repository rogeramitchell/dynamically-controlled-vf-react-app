import React from 'react';

class ContactTableHeader extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<th scope="col">
      	<div className="slds-truncate" title={this.props.Field.name}>{this.props.Field.label}</div>
    	</th>
		);
	}
}

export default ContactTableHeader;