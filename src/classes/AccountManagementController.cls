public class AccountManagementController
{
	/*
		RETURNS PACKAGE FOR INITIAL PAGE STATE
	*/
	@RemoteAction
	public static AccountManagementState getInitialState(Id accountId)
	{
		AccountManagementState state = new AccountManagementState();
		state.sectionMap = getPageMapping();
		state.fieldMap = getFieldDetails(state.sectionMap);

		Map<String, Set<String>> objectFields = getObjectFieldsForQueries(state.sectionMap, state.fieldMap);
		state.account = getAccount(accountId, objectFields.get('Account'));
		state.contacts = getContacts(accountId, objectFields.get('Contact'));
		state.opps = getOpportunities(accountId, objectFields.get('Opportunity'));

		return state;
	}

	/*
		SUPPORT METHODS
	*/
	@RemoteAction
	public static List<Dynamic_Page_Mapping__mdt> getPageMapping()
	{
		return [SELECT Id, Object_Name__c, Field_Set_Name__c, Section_Order__c, Number_of_Columns__c FROM Dynamic_Page_Mapping__mdt WHERE Active__c = true ORDER BY Section_Order__c ASC];
	}
	
	@RemoteAction
	public static Map<String, List<FieldSetReactor.FieldDetails>> getFieldDetails(List<Dynamic_Page_Mapping__mdt> pageMapping)
	{
	Map<String, List<FieldSetReactor.FieldDetails>> sectionFieldDetails = new Map<String, List<FieldSetReactor.FieldDetails>>();
			
		for(Dynamic_Page_Mapping__mdt pageMap : pageMapping)
		{
			List<FieldSetReactor.FieldDetails> fieldDetails = FieldSetReactor.getFieldDetails(pageMap.Field_Set_Name__c, pageMap.Object_Name__c);
			sectionFieldDetails.put(pageMap.Field_Set_Name__c, fieldDetails);
		}
		
		return sectionFieldDetails;
	}

	private static Map<String, Set<String>> getObjectFieldsForQueries(List<Dynamic_Page_Mapping__mdt> sections, Map<String, List<FieldSetReactor.FieldDetails>> fields)
	{
		Map<String, Set<String>> objectFields = new Map<String, Set<String>>();

		// iterate over each section to discover object, field set name
		for(Dynamic_Page_Mapping__mdt section : sections)
		{
			if(!objectFields.containsKey(section.Object_Name__c))
			{
				objectFields.put(section.Object_Name__c, new Set<String>());
			}

			// set of fields
			Set<String> fieldsForQuery = objectFields.get(section.Object_Name__c);

			// iterate over each field from the section's field set
			for(FieldSetReactor.FieldDetails field : fields.get(section.Field_Set_Name__c))
			{
				fieldsForQuery.add(field.name);
			}

			objectFields.put(section.Object_Name__c, fieldsForQuery);
		}

		return objectFields;
	}

	/*
		DATA METHODS - GET
	*/
	@RemoteAction
	public static Account getAccount(Id accountId, Set<String> fields)
	{
		String queryFields = String.join(new List<String>(fields), ',');
		String query = 'SELECT Id, ' + queryFields + ' FROM Account WHERE Id = \'' + accountId + '\'';
		
		return Database.query(query);
	}
	
	@RemoteAction
	public static List<Contact> getContacts(Id accountId, Set<String> fields)
	{
		String queryFields = String.join(new List<String>(fields), ',');
		String query = 'SELECT Id, ' + queryFields + ' FROM Contact WHERE AccountId = \'' + accountId + '\'';
		
		return Database.query(query);
	}
	
	@RemoteAction
	public static List<Opportunity> getOpportunities(Id accountId, Set<String> fields)
	{
		String queryFields = String.join(new List<String>(fields), ',');
		String query = 'SELECT Id, ' + queryFields + ' FROM Opportunity WHERE AccountId = \'' + accountId + '\'';
		
		return Database.query(query);
	}

	/*
		INNER CLASS - INITIAL PAGE STATE
	*/

	public class AccountManagementState
	{
		List<Dynamic_Page_Mapping__mdt> sectionMap = new List<Dynamic_Page_Mapping__mdt>();
		Map<String, List<FieldSetReactor.FieldDetails>> fieldMap = new Map<String, List<FieldSetReactor.FieldDetails>>();
		Account account = new Account();
		List<Contact> contacts = new List<Contact>();
		List<Opportunity> opps = new List<Opportunity>();
	}
}