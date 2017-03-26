# Building Admin Configurable UIs with React and Visualforce

Custom developed UIs can be a daunting thing to introduce to a client's Salesforce org if the team does not have development resources available to make changes in the future. This can be mitigated upfront by building **configurable UIs** that allow an admin to update the view layer and its components using **clicks not code**. In this example, we'll check out a Visualforce page that serves up a React app, and this React app respects **configurable metadata** within the org.

Our app leverages the standard **field set** and **custom metadata type** options within the Salesforce setup menu, and combines these with the [Field Set Reactor](https://github.com/rogeramitchell/FieldSetReactor) repo to describe the metadata in context of the current user. Let's dive in and see how these three components work alongside our client-side React app to create an admin configurable UI.

## Custom Metadata Types: An Alternative to Custom Settings

Custom metadata types were released in Summer '15 as an alternative to custom settings. With these, developers and administrators can deploy the data in each custom metadata type alongside change sets, thus decoupling the potential for data discrepancies between environments as part of releases and sandbox refreshes.

IMAGE GOES HERE

Within the app, we use custom metadata types to define sections of the UI, how these sections interact, and the object/fields that comprise that section. Each record's `DeveloperName` allows us to reference this section within our React app code. The rest of these fields allow admins to control aspects of the UI:

- `Active__c` checkbox allows control of whether to display this section
- `Section_Order__c` defines how sections appear relativr to one another
- `Object_Name__c` specifies the object to which the field set belongs
- `Field_Set_Name__c` binds a field set to this particular section

## Field Sets: Tried and True

Field sets have been around for a while, and are quite easy to implement within a Visualforce page using standard components like `<apex:repeat>`. Another use for field sets is within Apex to control fields used in a query or clone operation. In our app, field sets allow the admin to define the set of fields that should appear in a given section on the UI, and ensures the Apex controller includes those fields when serving data to the UI. Our use of field sets is to allow the admin to control which fields should appear on a per object basis, and for the developer to use these for describing the field attributes and accessibility for the current 
user.

## Field Set Reactor: A Utility to Help SPA Developers

Once we grab the custom metadata types for the current page along with the field sets, we need to describe the fields in context of the current user's access to ensure our UI is flexible and matches the current config. [Field Set Reactor](https://github.com/rogeramitchell/FieldSetReactor) has a method that returns a collection of the `FieldDetails` inner class, which does everything from provide the API name and data type, to the user's read/edit access for the field and the label the user sees in standard pages.

For each field set that appears in the custom metadata types for our page, we get a collection of `FieldDetails` and put this into a map with a key as the custom metadata type's `DeveloperName`.

CODE GOES HERE

## Integrating with React Components



## Ideas for Implementation

- Map a UI and define sections
- Build more logic to each (e.g. record type name, etc)
- Add to CMTs for handling number of columns to display in different UI sections