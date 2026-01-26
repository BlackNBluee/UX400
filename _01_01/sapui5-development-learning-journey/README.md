###    Implementing and Instantiating XML Fragments

## Reference: https://learning.sap.com/courses/developing-uis-with-sapui5-1/implementing-and-instantiating-xml-fragments_bd9dc4a9-7c9f-40dc-967e-ff555716c0f1

# Task 1: Create an XML Fragment with the Definition of the Dialog Box
Steps

    Create a new file named Dialog.fragment.xml in the subfolder view of the webapp folder.

        Open the context menu for the webapp/view folder in the project structure.

        Select New File.

        In the field that appears, type Dialog.fragment.xml and press Enter.
    Result
    The Dialog.fragment.xml file is created and displays in the editor.

    Add the following code to the Dialog.fragment.xml file to define a dialog box using the XML fragment:
    XML

    <core:FragmentDefinition
      xmlns="sap.m"
      xmlns:core="sap.ui.core">
      <Dialog
        id="dialog"
        title="Info" type="Message">
          <content>
            <Text text="Customer data is later saved via an OData service."/>
          </content>
          <beginButton>
            <Button
              text="Ok"
              press=".onCloseDialog"/>
          </beginButton>
      </Dialog>
    </core:FragmentDefinition>

    Note
    The dialog box displays the text "Customer data is later saved via an OData service" to the user. In addition, it has an Ok button that the user can use to close the popup again. For this purpose, the event handler method onCloseDialog registered for the press event of the Ok button will be implemented later. Please also note the Id dialog of the sap.m.Dialog UI element. This Id will be used later in the onCloseDialog event handler method to access the popup.

Result

The XML fragment should be implemented as follows:
Screenshot of the Dialog.fragment.xml file.
# Task 2: Register an Event Handler for the press Event of the Button on the Overview View
Steps

    Open the Overview.view.xml file from the webapp/view folder in the editor.

    Add attribute press=".onSave" to the <Button> tag of the Create Customer button to register an event handler named onSave on the press event of this button.

    Note
    In the next step, you will implement this event handler on the view controller to open the popup created above.

Result

The Create Customer button should now be implemented as follows:
The Overview.view.xml, highlighting the press=.onSave attribute.
# Task 3: Implement the Registered Event Handler on the View Controller to Open the Popup
Steps

    Open the Overview.controller.js file from the webapp/controller folder in the editor.

    Add the onSave event handler method registered with the Create Customer button in the previous step to the view controller. Implement this method as follows to open in it the popup defined above:
    JavaScript

    onSave: function () {
      if (!this.pDialog) {
        this.pDialog = this.loadFragment({
          name: "sap.training.exc.view.Dialog"
        });
      }
      this.pDialog.then(function (oDialog) {
        oDialog.open();
      });
    }

    Note

    If the dialog in the fragment does not exist yet, the fragment is instantiated by calling the loadFragment() method.

    The loading Promise of the dialog fragment is stored on the view controller instance. This makes it possible to handle the opening of the dialog asynchronously on each click of the Create Customer button.

Result

The view controller should now look like this:
The Overview.controller.js file, highlighting the onSave function.
# Task 4: Implement the Method to Close the Dialog on the View Controller
Steps

    Make sure that the Overview.controller.js view controller is open in the editor.

    Add the onCloseDialog event handler method, registered above for the Ok button on the popup, to the view controller. Implement this method as follows to close the popup through it again:
    JavaScript

    onCloseDialog: function () {
      this.byId("dialog").close();
    }

    Note
    The event handler method closes the popup by accessing the dialog through its Id. It is not necessary to chain to the pDialog Promise, since the event handler is only called from within the loaded dialog itself.

Result

The view controller should now look like this:
The Overview.controller.js file, highlighting the onCloseDialog function.
# Task 5: Apply the Content Density for the Dialog
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