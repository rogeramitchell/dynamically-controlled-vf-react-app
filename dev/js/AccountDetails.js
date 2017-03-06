import React from 'react';

class AccountDetails extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		if(this.props.Fields.get('Account_Details') != null) {
			let flexOrder = {order: this.props.Section.Section_Order__c};
			return(
				<div style={flexOrder}>
				</div>
			);
		} else {
			return null;
		}
	}
}

export default AccountDetails;