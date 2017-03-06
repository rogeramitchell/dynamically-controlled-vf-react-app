# Dynamic Page Mapping with Visualforce and React
Allow administrators to control the layout of Visualforce pages based on **Field Sets** and a **Custom Metadata Type** that has a collection of field sets relevant to their Visualforce page.

The goals of this project:

- Allow non-devs to control the view layer of a Visualforce page
- Allow developers to receive app state from configurable settings
- Allow end users to benefit from translated labels in their org by using the [Field Set Reactor](https://github.com/rogeramitchell/FieldSetReactor) utility class

This originated as a question as to the complexity of creating a single page app that could dynamically change its appearance based on an administrator changing fields in a field set, and the sections that should display based on record type.

## Test Driving

- Fork the repository and clone to your local machine
- `cd` to your project folder and run `npm install`
- After dependencies have loaded, `webpack --watch` to rebuild your `resource-bundles/AccountManagement.resource/js/app.js` file when components in `dev/` are changed

As a bonus, use the **Convert to MavensMate Project** feature to deploy this into your org

## Inspiration for Expanding this Pattern
If you wanted to further classify the custom metadata type, you could add a "record type" that allows for binding a record type developer name to the fields that should appear in the `AccountHeader.js` component. This could also be extended to only display specific columns in the `OppTable.js` component for that specified account record type.

An added benefit to expanding the use of the [Field Set Reactor]() utility is the accessibility that is supported for the user. If customizations exist for that user, or if their language is set to something aside to that of the developer's language, the labels on the page appear as expected.

## Blog Post & Demo GIF

![demo.gif](demo.gif)

Blog post pending...