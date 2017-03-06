import React from 'react';
import ContactTableHeader from './ContactTableHeader';
import ContactTableRow from './ContactTableRow';

class ContactTable extends React.Component {
	constructor(props) {
		super(props);
	}

	render(props) {
		if(this.props.Fields.get('Contact_Table') != null && this.props.Contacts != null) {
			let flexOrder = {order: this.props.Section.Section_Order__c};
			return(
				<div style={flexOrder}>
					<table className="slds-table slds-table--bordered slds-table--cell-buffer">
						<thead>
							<tr className="slds-text-title--caps">
								{
									this.props.Fields.get('Contact_Table').map(item => 
										<ContactTableHeader key={item.name} Field={item} />
									)
								}
							</tr>
						</thead>
						<tbody>
							{
								this.props.Contacts.map(item => 
									<ContactTableRow key={item.Id} Fields={this.props.Fields.get('Contact_Table')} Contact={item} />
								)
							}
						</tbody>
					</table>
				</div>
			);
		} else {
			return(
				<div>
					
				</div>
			);
		}
	}
}

export default ContactTable;