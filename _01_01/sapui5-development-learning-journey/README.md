### Working with Models

## Reference: https://learning.sap.com/courses/developing-uis-with-sapui5-1/working-with-models_e8a80842-2cb6-48e3-86b3-321d324f8f2f

# Task 1: Instantiate a JSON Model in the Initialization Method of the Overview View Controller
Steps

    Open the Overview.controller.js file from the webapp/controller folder in the editor.

    Add the sap/ui/model/json/JSONModel module to the dependency array of the view controller and a corresponding parameter named JSONModel to the factory function of the view controller.
    Result
    The view controller should now look like this:The Overview.controller.js file, highlighting the sap/ui/model/json/JSONModel code.

    Add the onInit initialization method to the view controller. Implement this method as follows to instantiate a JSON model and set it under the name customer for the Overview view.
    JavaScript

    onInit: function () {
      var oModel = new JSONModel();
      this.getView().setModel(oModel, "customer");
    }

Result

The view controller should now look like this:
The Overview.controller.js file, highlighting the onInit function.
# Task 2: Bind the Input Fields of the Form on the Overview View to the JSON Model
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