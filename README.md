# MyImportants
============================================================================================

# SF_PR001

# AccountCustomField Component

## Overview
The `AccountCustomField` component is a Lightning Web Component (LWC) designed to edit Account records in Salesforce. It includes fields for Name, Rating, Site, Type, and Phone Number.

## Features
- **Public Property**: Uses the `@api` decorator to expose the `recordId` property.
- **Record Edit Form**: Implements a `lightning-record-edit-form` to allow users to edit Account records.
- **Event Handling**: Includes success and error handlers for form submissions.

## Usage
To use this component, include it in your Lightning page and pass the `recordId` of the Account you want to edit.

```html
<c-account-custom-field record-id="001XXXXXXXXXXXXXXX"></c-account-custom-field>
```

============================================================================================
