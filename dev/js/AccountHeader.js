import React from 'react';
import AccountHeaderField from './AccountHeaderField';

class AccountHeader extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		if(this.props.Fields.get('Account_Header') != null) {
			let flexOrder = {order: this.props.Section.Section_Order__c};
			
			return(
				<div style={flexOrder} className="slds-page-header">
				  <div className="slds-grid">
				    <div className="slds-col slds-has-flexi-truncate">
				      <div className="slds-media slds-no-space slds-grow">
				        <div className="slds-media__body">
				          <p className="slds-text-title--caps slds-line-height--reset">Account</p>
				          <h1 className="slds-page-header__title slds-m-right--small slds-align-middle slds-truncate" title="this should match the Record Title">{this.props.Account.Name}</h1>
				        </div>
				      </div>
				    </div>
				  </div>
				  <ul className="slds-grid slds-page-header__detail-row">
				  {
				  	this.props.Fields.get('Account_Header').map(item => 
				  		<AccountHeaderField key={item.name} Field={item} Account={this.props.Account} />
			  		)
				  }
				  </ul>
				</div>
			);
		} else {
			return(
				<div className="slds-page-header">
				  <div className="slds-grid">
				    <div className="slds-col slds-has-flexi-truncate">
				      <div className="slds-media slds-no-space slds-grow">
				        <div className="slds-media__body">
				          <p className="slds-text-title--caps slds-line-height--reset">Test Type</p>
				          <h1 className="slds-page-header__title slds-m-right--small slds-align-middle slds-truncate" title="this should match the Record Title">Record Title</h1>
				        </div>
				      </div>
				    </div>
				  </div>
			  </div>
		  );
		}
	}
}

export default AccountHeader;