### Implementing Aggregation Binding

## Reference: https://learning.sap.com/courses/developing-uis-with-sapui5-1/implementing-aggregation-binding_ec3df9a2-1115-43bf-a863-cec775ae0a48

# Task 1: Add an Automatically Instantiated JSON Model with the Prepared Customer Data to the Component
Steps

    Open the prepared data.json file from the webapp/model folder and familiarize yourself with the structure of the customer data it contains.

    The customer information is contained in an array called Customers, where each customer object has the following properties: CustomerNumber, Form, CustomerName, Street, PostCode, City, Country, Email, Telephone, and Discount.

    Furthermore, for each customer there is an array called _Bookings, which contains flight bookings of the respective customer.
    Sample data.json file, as described in the preceding text.

    Now open the manifest.json application descriptor from the webapp folder in the editor.

    Add the following property to the models property from the sap.ui5 namespace to make the customer data explored above available to the component via an automatically instantiated, unnamed JSON model:
    JSON

    "": {
      "type": "sap.ui.model.json.JSONModel",
      "uri": "model/data.json"
    }

Result

The models section of the application descriptor should now look like this:
The models section of the manifest.json file.
# Task 2: Add a Table with the Customer Data from the JSON Model to the Overview View
Steps

    Open the Overview.view.xml file from the webapp/view folder in the editor.

    Add the following table definition directly after the </Panel> tag to display the customer data from the JSON model:
    XML

    <Table headerText="Customers" growing="true" growingThreshold="5"
        class="sapUiResponsiveMargin" width="auto" items="{/Customers}">
      <columns>
        <Column><header><Text text="Customer Name"/></header></Column>
        <Column><header><Text text="Street"/></header></Column>
        <Column><header><Text text="Post Code"/></header></Column>
        <Column><header><Text text="City"/></header></Column>
        <Column><header><Text text="Country"/></header></Column>
        <Column><header><Text text="Email"/></header></Column>
      </columns>
      <items>
        <ColumnListItem>
          <cells>
            <ObjectIdentifier title="{CustomerName}"/>
            <Text text="{Street}"/>
            <Text text="{PostCode}"/>
            <Text text="{City}"/>
            <Text text="{Country}"/>
            <Text text="{Email}"/>
          </cells>
        </ColumnListItem>
      </items>
    </Table>

    Note
        The attribute growing="true" of the Table UI element enables the growing feature of the table to load more items by requesting from the model. The number of items to be requested from the model for each grow is defined by the growingThreshold attribute.
        The booking data also contained in the model data will be displayed in the next exercise via another table.
        In a later exercise, the JSON model used here will be replaced by an OData model to display customer data from a back-end system via an OData service on the UI.
    Result
    The Overview view should now look like this:The Overview.view.xml file, highlighting the Table tag.

    Test run your application by starting it from the SAP Business Application Studio.

    Make sure that the customer data is displayed in the table on the Overview view.

        Right-click on any subfolder in your sapui5-development-learning-journey project and select Preview Application from the context menu that appears.

        Select the npm script named start-noflp in the dialog that appears.

        In the opened application, check if the component works as expected.
Steps

    Open the Overview.view.xml file from the webapp/view folder in the editor.

    Bind the input fields of the form to the JSON model created above. For this purpose, change the value of the value attribute of all <Input> tags as follows:
    Old	New
    XML

    <Label text="Form" />
    <Input value="" />

    	
    XML

    <Label text="Form" />
    <Input value="{customer>/Form}" />

    XML

    <Label text="Customer Name" />
    <Input value="" />

    	
    XML

    <Label text="Customer Name" />
    <Input value="{customer>/CustomerName}" />

    XML

    <Label text="Discount" />
    <Input value="" />

    	
    XML

    <Label text="Discount" />
    <Input value="{customer>/Discount}" />

    XML

    <Label text="Street" />
    <Input value="" />

    	
    XML

    <Label text="Street" />
    <Input value="{customer>/Street}" />

    XML

    <Label text="Post Code" />
    <Input value="" />

    	
    XML

    <Label text="Post Code" />
    <Input value="{customer>/PostCode}" />

    XML

    <Label text="City" />
    <Input value="" />

    	
    XML

    <Label text="City" />
    <Input value="{customer>/City}" />

    XML

    <Label text="Country" />
    <Input value="" />

    	
    XML

    <Label text="Country" />
    <Input value="{customer>/Country}" />

    XML

    <Label text="Email" />
    <Input value="" />

    	
    XML

    <Label text="Email" />
    <Input value="{customer>/Email}" />

    XML

    <Label text="Telephone" />
    <Input value="" />

    	
    XML

    <Label text="Telephone" />
    <Input value="{customer>/Telephone}" />

    Note
    Since the JSON model is named customer, all bindings start with the prefix customer>. The following identifier defines the name of the bound model property (for example, CustomerName).

Result

The Overview view should now look like this:
The resulting Overview.view file.
Task 3: Display the Customer Name Entered by the User via the Info Text on the Popup
Steps

    Open the Dialog.fragment.xml file from the webapp/view folder in the editor.

    Change the info text displayed via the Text UI element so that the content of model property customer>/CustomerName appears on the popup. To do this, replace the text "Customer data is later saved via an OData service." with the text "Customer {customer>/CustomerName} is later saved via an OData service.".
    Result
    The XML fragment should now look like this:The Dialog.fragment.xml file, highlighting the Text tag.

    Test run your application by starting it from the SAP Business Application Studio.

    Make sure that the customer name entered in the form is output via the info text on the popup.

        Right-click on any subfolder in your sapui5-development-learning-journey project and select Preview Application from the context menu that appears.

        Select the npm script named start-noflp in the dialog that appears.

        In the opened application, check if the component works as expected.
Steps

    Make sure that the Overview.controller.js view controller is open in the editor.

    Add the sap/ui/core/syncStyleClass module to the dependency array of the view controller and a corresponding parameter named syncStyleClass to the factory function of the view controller.
    Result
    The view controller should now look like this:The Overview.controller.js file, highlighting the onSave function.

    Use the sap/ui/core/syncStyleClass module in the onSave event handler method to forward the content density to the popup. To do this, adjust the implementation of the event handler method as follows:
    JavaScript

    onSave: function () {
      if (!this.pDialog) {
        this.pDialog = this.loadFragment({
          name: "sap.training.exc.view.Dialog"
        }).then(function (oDialog) {
          syncStyleClass(this.getOwnerComponent().getContentDensityClass(), this.getView(), oDialog);
          return oDialog;
        }.bind(this));
      }
      this.pDialog.then(function (oDialog) {
        oDialog.open();
      });
    }

    Note
    The popup is not part of the Overview view, but is opened in a special part of the DOM, the static area. Therefore, the content density class defined in the App view is not known to the popup, so the style class of the app is manually synchronized with the popup.
    Result
    The onSave event handler method should now look like this:The Overview.controller.js file, highlighting the then function.

    Test run your application by starting it from the SAP Business Application Studio.

    Check the following points:
        Make sure that the popup opens when you press the Create Customer button.
        Make sure that the popup is closed when you press the Ok button on the dialog box.
        Make sure that the content densities compact and cozy are passed through to the dialog box. The Ok button on the dialog box should be displayed larger for cozy than for compact.

    Note

    To test the different content densities, you can use the device toolbar in the developer tools of the Google Chrome, Firefox, or Microsoft Edge browser: Start your application and, in the developer tools (F12), call the device toolbar with the key combination Ctrl + Shift + M. You can use the device toolbar to select a device you want to emulate. After you select the device, you have to refresh the browser (F5), to ensure that the onInit() method of the App view controller is called, where the content density is set specifically for the device type.

    Note

    Do not pay attention to the errors displayed in the console when in the developer tools. This is due to some code prepared for future exercises that is then not yet complete.

        Right-click on any subfolder in your sapui5-development-learning-journey project and select Preview Application from the context menu that appears.

        Select the npm script named start-noflp in the dialog that appears.

        In the opened application, check if the component works as expected.