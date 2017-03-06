import React from 'react';
import ReactDOM from 'react-dom';
import '../css/App.css';

import { getUrlParameters } from './Helpers';
import { getInitialState } from './DataHandler';

import AccountHeader from './AccountHeader';
import AccountDetails from './AccountDetails';
import AccountLongFields from './AccountLongFields';
import ContactTable from './ContactTable';
import OppTable from './OppTable';

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
			<div className="app-container">
				<AccountHeader 	Fields={this.state.Fields}
								Section={this.state.Sections.get('Account_Header')}
								Account={this.state.Account} />
				<AccountDetails 	Fields={this.state.Fields}
									Section={this.state.Sections.get('Account_Details')}
									Account={this.state.Account}/>
				<AccountLongFields 	Fields={this.state.Fields}
									Section={this.state.Sections.get('Account_Long_Fields')}
									Account={this.state.Account}/>
				<ContactTable 	Fields={this.state.Fields}
								Section={this.state.Sections.get('Contact_Table')}
								Contacts={this.state.Contacts} />
				<OppTable 	Fields={this.state.Fields}
							Section={this.state.Sections.get('Opp_Table')}
							Opps={this.state.Opps} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));