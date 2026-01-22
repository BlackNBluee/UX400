### Defining and Using Modules

## Reference: https://learning.sap.com/courses/developing-uis-with-sapui5-1/defining-and-using-modules_ab210fc5-edce-4dfb-920e-4ec152db33f0

# Task 1: Delete the <script> Tag
Steps

    Make sure that the index.html page is open in the editor.

    Delete the <script> tag used to create and place the Hello World Text UI element in the file.

        Delete the following lines:
        JavaScript

        <script>
          var oText = new sap.m.Text({text: "Hello World"});
          oText.placeAt("content");
        </script>

Result

The <head> tag of the HTML page should now look like this:
Screenshot of the updated head code.
# Task 2: Implement a Module
Steps

    Create a new file named index.js in the webapp folder.

        Open the context menu for the webapp folder in the project structure.

        Select New File.

        In the field that appears, type index.js and press Enter.
    Result
    The index.js file is created and displays in the editor.

    Add the following code to the index.js file to define a module through which the Hello World Text UI element is created and placed on the HTML page:
    JavaScript

    sap.ui.define(["sap/m/Text"], function (Text) {
      "use strict";

      new Text({ text: "Hello World" }).placeAt("content");

    });

Result

The index.js file should be implemented as follows:
Screenshot of the final index.js file.
# Task 3: Load the Module Declaratively
Steps

    Make sure the index.html page is open in the editor.

    Add the following attributes to the bootstrap script:
    XML

    data-sap-ui-async="true"
    data-sap-ui-onInit="module:sap/training/exc/index"
    data-sap-ui-resourceroots='{"sap.training.exc": "./"}'

    Note
    The added configuration tells SAPUI5 that resources in the sap.training.exc namespace are in the same directory as index.html. The namespace is used to initially load the index.js module. For performance reasons, SAPUI5 is enabled to load modules and library-preload files asynchronously.

        The <head> tag of the HTML page should now look like this:
        Screenshot of the updated head tag.

    Test run your application by starting it from the SAP Business Application Studio.

        Right-click on any subfolder in your sapui5-development-learning-journey project and select Preview Application from the context menu that appears.

        Select the npm script named start-noflp in the dialog that appears.

        In the opened application, check if the Hello World text of the sap.m.Text UI element is displayed on the HTML page.