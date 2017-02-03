import React from 'react';
import ReactDOM from 'react-dom';
import '../css/App.css';

import { getUrlParameters } from './Helpers';
import { setInitialState } from './DataHandler';

import AccountHeader from './AccountHeader';
import AccountDetails from './AccountDetails';
import AccountLongFields from './AccountLongFields';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			RecordId: '',
			Sections: new Map(),
			Fields: new Map()
		}
	}

	componentWillMount() {
		const recordId = getUrlParameters()["id"];
		this.setState({
			RecordId: recordId
		}, setInitialState(this));
	}

	render() {
		return (
			<div className="App">
				<AccountHeader Fields={this.state.Fields.get('Account_Header')} />
				<AccountDetails />
				<AccountLongFields />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));