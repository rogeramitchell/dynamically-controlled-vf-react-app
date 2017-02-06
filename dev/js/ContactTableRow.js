import React from 'react';
import ContactTableRowCell from './ContactTableRowCell';

class ContactTableRow extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<tr>
				{
					this.props.Fields.map(item =>
						<ContactTableRowCell key={this.props.Contact.Id + '-' + item.name} Field={item} Value={this.props.Contact[item.name]} />
					)
				}
			</tr>
		);
	}
}

export default ContactTableRow;