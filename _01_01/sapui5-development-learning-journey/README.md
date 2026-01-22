###  Working with XML Views

## Reference: https://learning.sap.com/courses/developing-uis-with-sapui5-1/working-with-xml-views_dfec8eb9-8b04-46b3-84fb-58a0ce10a22b

# Task 1: Implement an XML View
Steps

    Create a new file named App.view.xml in the subfolder view of the webapp folder.

        Open the context menu for the webapp/view folder in the project structure.

        Select New File.

        In the field that appears, type App.view.xml and press Enter.
    Result
    The App.view.xml file is created and displays in the editor.

    Add the following code to the App.view.xml file to define an XML view with a Hello World Text UI element:
    XML

    <mvc:View 
      xmlns:mvc="sap.ui.core.mvc"
      xmlns="sap.m">

      <Text text="Hello World"/>

    </mvc:View>

Result

The XML view should be implemented as follows:
Screenshot of the final XML view.
# Task 2: Instantiate the XML View
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