###   Working with View Controllers

## Reference: https://learning.sap.com/courses/developing-uis-with-sapui5-1/working-with-view-controllers_c4691c5c-320a-4097-bb54-6f50364ebc38

# Task 1: Add a Button to the View
Steps

    Make sure the App.view.xml view file is open in the editor.

    Remove the Hello World Text UI element from the view.

        Delete the following line:
        XML

        <Text text="Hello World"/>

    Instead, add the following line to the view to create a button labeled Say Hello that, when pressed, will call the event handler method onSayHello in the view controller:
    XML

    <Button text="Say Hello" press=".onSayHello"/>

    Note
    The event handler method does not exist at the moment. It will be created in the next exercise step.
    Result
    The XML view should now look like this:Screenshot of the updated XML file, highlighted the button tag.

    Add the following attribute to the <mvc:View> tag to define the name of the controller that should be instantiated and used for the view:
    XML

    controllerName="sap.training.exc.controller.App"

    Note
    The view controller does not exist at the moment. It will be created in the next exercise step.

Result

The XML view should now look like this:
The updated XML view, highlighting the controllerName attribute.
# Task 2: Implement a View Controller
Steps

    Create a new file named App.controller.js in the subfolder controller of the webapp folder.

        Open the context menu for the webapp/controller folder in the project structure.

        Select New File.

        In the field that appears, type App.controller.js and press Enter.
    Result
    The App.controller.js file is created and displays in the editor.

    Add the following code to the App.controller.js file to implement the required view controller with the onSayHello method:

    Note
    A dialog with the text Hello World is to be displayed via the onSayHello event handler method. For this purpose, the information() method of sap.m.MessageBox is called. The view controller therefore also depends on the MessageBox module, which is why it is listed in the dependency array and as a parameter of the factory function.
    JavaScript

    sap.ui.define([
      "sap/ui/core/mvc/Controller",
      "sap/m/MessageBox"
    ],
      function (Controller, MessageBox) {
        "use strict";

        return Controller.extend("sap.training.exc.controller.App", {

          onSayHello: function () {
            MessageBox.information("Hello World");
          }

        });
      });

    Result
    The App.controller.js file should be implemented as follows:Screenshot of the updated app.controller.js file.

    Test run your application by starting it from the SAP Business Application Studio.

        Right-click on any subfolder in your sapui5-development-learning-journey project and select Preview Application from the context menu that appears.

        Select the npm script named start-noflp in the dialog that appears.

        In the opened application, check if the button is displayed and the Hello World dialog appears when the button is clicked.
Steps

    Make sure the index.js module is open in the editor.

    Delete the code that creates a Hello World Text UI element and places it on the HTML page in the index.js module.

        Delete the following line:
        JavaScript

        new Text({ text: "Hello World" }).placeAt("content");

    Result
    The index.js module should now look like this:Screenshot of the updated index.js file.

    Modify the implementation of the index.js module as follows to instantiate the XML view created above and place it on the HTML page:
    JavaScript

    sap.ui.define(["sap/ui/core/mvc/XMLView"], function (XMLView) {
      "use strict";

      XMLView.create({
        id: "App",
        viewName: "sap.training.exc.view.App"
      }).then(function (oView) {
        oView.placeAt("content");
      });

    });

    Note
    Pay attention to the changed dependency array and parameter of the factory function. index.js now depends on sap/ui/core/mvc/XMLView instead of sap/m/Text.
    Result
    The index.js file should be implemented as follows:Screenshot of the updated index.js file.

    Test run your application by starting it from the SAP Business Application Studio.

        Right-click on any subfolder in your sapui5-development-learning-journey project and select Preview Application from the context menu that appears.

        Select the npm script named start-noflp in the dialog that appears.

        In the opened application, check if the XML view with the Hello World text of the sap.m.Text UI element is displayed on the HTML page.