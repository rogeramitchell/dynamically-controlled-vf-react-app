import React from 'react';
import OppTableRowCell from './OppTableRowCell';

class OppTableRow extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<tr>
				{
					this.props.Fields.map(item =>
						<OppTableRowCell key={this.props.Opp.Id + '-' + item.name} Field={item} Value={this.props.Opp[item.name]} />
					)
				}
			</tr>
		);
	}
}

export default OppTableRow;