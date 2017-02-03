public class AccountManagementController
{    
    @RemoteAction
	public static List<Dynamic_Page_Mapping__mdt> getPageMapping()
    {
        return [SELECT Id, Object_Name__c, Field_Set_Name__c, Section_Order__c, Number_of_Columns__c FROM Dynamic_Page_Mapping__mdt WHERE Active__c = true ORDER BY Section_Order__c ASC];
    }
    
    @RemoteAction
    public static Map<Id, List<FieldSetReactor.FieldDetails>> getFieldDetails(List<Dynamic_Page_Mapping__mdt> pageMapping)
    {
		Map<Id, List<FieldSetReactor.FieldDetails>> sectionFieldDetails = new Map<Id, List<FieldSetReactor.FieldDetails>>();
        
        for(Dynamic_Page_Mapping__mdt pageMap : pageMapping)
        {
            List<FieldSetReactor.FieldDetails> fieldDetails = FieldSetReactor.getFieldDetails(pageMap.Field_Set_Name__c, pageMap.Object_Name__c);
            sectionFieldDetails.put(pageMap.Id, fieldDetails);
        }
        
        return sectionFieldDetails;
    }
    
    @RemoteAction
    public static Account getAccount(Id accountId, List<String> fields)
    {
        String queryFields = String.join(fields, ',');
        String query = 'SELECT Id, ' + queryFields + ' FROM Account WHERE Id = \'' + accountId + '\'';
        
        return Database.query(query);
    }
    
    @RemoteAction
    public static List<Contact> getContacts(Id accountId, List<String> fields)
    {
        String queryFields = String.join(fields, ',');
        String query = 'SELECT Id, ' + queryFields + ' FROM Contact WHERE AccountId = \'' + accountId + '\'';
        
        return Database.query(query);
    }
    
    @RemoteAction
    public static List<Opportunity> getOpportunities(Id accountId, List<String> fields)
    {
        String queryFields = String.join(fields, ',');
        String query = 'SELECT Id, ' + queryFields + ' FROM Opportunity WHERE AccountId = \'' + accountId + '\'';
        
        return Database.query(query);
    }
}