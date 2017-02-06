import React from 'react';

class AccountHeaderField extends React.Component {
	constructor() {
		super();
	}

	render() {
		return(
	    <li className="slds-page-header__detail-block">
	      <p className="slds-text-title slds-truncate slds-m-bottom--xx-small" title={this.props.Field.name}>{this.props.Field.label}</p>
	      <p className="slds-text-body--regular slds-truncate" title="">Value Face!</p>
	    </li>
		);
	}
}

export default AccountHeaderField;