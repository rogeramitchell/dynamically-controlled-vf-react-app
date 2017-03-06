import React from 'react';

class OppTableHeader extends React.Component {
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

export default OppTableHeader;