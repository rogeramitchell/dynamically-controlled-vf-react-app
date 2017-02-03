export function setInitialState(context) {
	let sectionMap = new Map();
	let fieldMap = new Map();

	Visualforce.remoting.Manager.invokeAction(
		'AccountManagementController.getPageMapping', (result1, event1) => {
			if(event1.statusCode === 200) {
				result1.map(section => {
					sectionMap.set(section.Id, section);
				});

				Visualforce.remoting.Manager.invokeAction(
					'AccountManagementController.getFieldDetails',
					result1,
					(result2, event2) => {
						if(event2.statusCode === 200) { 
							Object.keys(result2).map(fieldGroup => {
								fieldMap.set(sectionMap.get(fieldGroup).Field_Set_Name__c, result2[fieldGroup]);
							});

							context.setState({
								Sections: sectionMap,
								Fields: fieldMap
							});
						} else {
							console.log(event2);
						}
					});
			} else {
				console.log(event1);
			}
		});
}