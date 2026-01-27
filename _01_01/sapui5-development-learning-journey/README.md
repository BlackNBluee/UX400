### Using Data Types

## Reference: https://learning.sap.com/courses/developing-uis-with-sapui5-1/using-data-types_d37f74ff-4075-405e-a0ca-7c05baf8bf7b

# Task 1: Enable Validation Handling by the Message Manager for the Component
Steps

    Open the manifest.json application descriptor from the webapp folder in the editor.

    Add the following property somewhere in the sap.ui5 namespace to enable validation handling by the message manager for the component:
    JSON

    "handleValidation": true

Result

The sap.ui5 namespace should now look similar to the following:
The manifest.json file, highlighting the handleValidation function.
# Task 2: Validate and Format Application Data using Simple Types
Steps

    Open the Overview.view.xml file from the webapp/view folder in the editor.

    Adapt the data binding for the Discount input element in the form as follows:
    Old	New
    XML

    <Input value="{customer>/Discount}"/>

    	
    XML

    <Input
      value="{
        path: 'customer>/Discount',
        type: 'sap.ui.model.type.Integer',
        constraints: {minimum: 0, maximum: 100}
      }"/>

    Note

    With regard to input validation, the adapted data binding causes the message manager to display an error in the following situations:
        If the user input cannot be parsed as an integer.
        If the entered integer value is not between 0 and 100.
    Result
    The form should now look like this:The Overview.view.xml file, highlighting the Input tag.

    Adapt the data binding for the Flight Date column in the booking table as follows:
    Old	New
    XML

    <ObjectIdentifier title="{FlightDate}"/>

    	
    XML

    <ObjectIdentifier
      title="{
        path: 'FlightDate',
        type: 'sap.ui.model.type.Date',
        formatOptions: {
          source: {pattern: 'yyyy-MM-dd'},
          style: 'medium'
        }
      }"/>

    Note
    The adapted data binding transforms the content of the FlightDate model property into a formatted date string. In the data.json file from the webapp/model folder, the flight date is stored as a string, for example "2024-02-27". This is converted to the format "Feb 27, 2024" via the data binding.
    Result
    The booking table should now look like this:The Overview.view.xml file, highlighting the ObjectIdentifier tag.

    Adapt the data binding for the Foreign Currency Payment column in the booking table as follows:
    Old	New
    XML

    <ObjectNumber
      number="{ForeignCurrencyPayment}"
      unit="{ForeignCurrency}"/>

    	
    XML

    <ObjectNumber
      number="{
        parts: [
          {path: 'ForeignCurrencyPayment'},
          {path: 'ForeignCurrency'}
        ],
        type: 'sap.ui.model.type.Currency',
        formatOptions: {showMeasure: false}
      }"
      unit="{ForeignCurrency}"/>

    Note

    The added Currency data type provides a formatting of the ForeignCurrencyPayment model property based on the currency code. For example, currency amounts in Euro (EUR) are displayed with 2 decimals, while amounts in Japanese Yen (JPY) have no decimals.

    Additionally, the showMeasure formatting option is set to false. This hides the currency code in the number property , because it is passed on to the ObjectNumber control as a separate property unit.
    Result
    The booking table should now look like this:The Overview.view.xml file, highlighting the ObjectNumber tag.

    Test run your application by starting it from the SAP Business Application Studio.

    Make sure that the validation and formatting features outlined above are now present in the application.

        Right-click on any subfolder in your sapui5-development-learning-journey project and select Preview Application from the context menu that appears.

        Select the npm script named start-noflp in the dialog that appears.

        In the opened application, check if the component works as expected.
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