import React from 'react';
import OppTableHeader from './OppTableHeader';
import OppTableRow from './OppTableRow';

class OppTable extends React.Component {
	constructor(props) {
		super(props);
	}

	render(props) {
		if(this.props.Fields.get('Opp_Table') != null && this.props.Opps != null) {
			return(
				<table className="slds-table slds-table--bordered slds-table--cell-buffer">
					<thead>
						<tr className="slds-text-title--caps">
							{
								this.props.Fields.get('Opp_Table').map(item => 
									<OppTableHeader key={item.name} Field={item} />
								)
							}
						</tr>
					</thead>
					<tbody>
						{
							this.props.Opps.map(item => 
								<OppTableRow key={item.Id} Fields={this.props.Fields.get('Opp_Table')} Opp={item} />
							)
						}
					</tbody>
				</table>
			);
		} else {
			return(
				<div>
					
				</div>
			);
		}
	}
}

export default OppTable;