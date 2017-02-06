export function getInitialState(context) {
	Visualforce.remoting.Manager.invokeAction(
		'AccountManagementController.getInitialState',
		context.state.RecordId,
		(result, event) => {	
			if(event.statusCode === 200) {
				let Sections = new Map();
				let Fields = new Map();

				result.sectionMap.map(item => {
					Sections.set(item.Field_Set_Name__c, item);
				})

				Sections.forEach((value, key, map) => {
					Fields.set(key, result.fieldMap[key]);
				})

				context.setState({
					Sections: Sections,
					Fields: Fields,
					Account: result.account,
					Contacts: result.contacts,
					Opps: result.opps
				});

			} else {
				console.log(event);
			}
		}
	);
}