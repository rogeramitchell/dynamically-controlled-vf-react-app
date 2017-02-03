import React from 'react';

class AccountHeaderField extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
	    <li className="slds-page-header__detail-block">
	      <p className="slds-text-title slds-truncate slds-m-bottom--xx-small" title="Field 1">Field 1</p>
	      <p className="slds-text-body--regular slds-truncate" title="Description that demonstrates truncation with a long text field">Description that demonstrates truncation with a long text field.</p>
	    </li>
		);
	}
}

export default AccountHeaderField;