import React from 'react';

class AccountLongFields extends React.Component {
	constructor() {
		super();
	}

	render() {
		if(this.props.Fields.get('Account_Long_Fields') != null) {
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

export default AccountLongFields;