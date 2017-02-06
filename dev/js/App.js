import React from 'react';
import ReactDOM from 'react-dom';
import '../css/App.css';

import { getUrlParameters } from './Helpers';
import { getInitialState } from './DataHandler';

import AccountHeader from './AccountHeader';
import AccountDetails from './AccountDetails';
import AccountLongFields from './AccountLongFields';
import ContactTable from './ContactTable';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			RecordId: '',
			Sections: new Map(),
			Fields: new Map(),
			Account: {},
			Contacts: [],
			Opps: []
		}
	}

	componentWillMount() {
		const recordId = getUrlParameters()["id"];
		this.setState({
			RecordId: recordId
		}, () => {getInitialState(this)});
	}

	render() {
		return (
			<div className="App">
				<AccountHeader 	Fields={this.state.Fields}
												Section={this.state.Sections.get('Account_Header')}
												Account={this.state.Account} />
				<AccountDetails />
				<AccountLongFields />
				<ContactTable 	Fields={this.state.Fields}
												Section={this.state.Sections.get('Contact_Table')}
												Contacts={this.state.Contacts} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));