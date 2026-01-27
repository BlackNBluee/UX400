### Implementing and Using Formatter Functions

## Reference: https://learning.sap.com/courses/developing-uis-with-sapui5-1/implementing-and-using-formatter-functions_c7f9608b-de6f-44a4-b022-98cab121a6d2

# Task 1: Create the Formatter Function
Steps

    Create a new file named formatter.js in the subfolder model of the webapp folder.

        Open the context menu for the webapp/model folder in the project structure.

        Select New File.

        In the field that appears, type formatter.js and press Enter.
    Result
    The formatter.js file is created and displays in the editor.

    Add the following code to the formatter.js file to create a formatter function named classText that transforms passed values from the model into meaningful texts.
    JavaScript

    sap.ui.define([], function () {
      "use strict";

      return {

        classText: function (sClass) {
          switch (sClass) {
            case "C":
              return "Business Class";
            case "Y":
              return "Economy Class";
            case "F":
              return "First Class";
            default:
              return sClass;
          }
        }

      };

    });

Result

The formatter function should be implemented as follows:
Screenshot of the formatter function, as described in the text.
# Task 2: Use the Formatter Function for the Display of the Flight Class
Steps

    Open the Overview.view.xml file from the webapp/view folder in the editor.

    Add the following attribute to the <mvc:View> tag:
    XML

    core:require="{formatter: 'sap/training/exc/model/formatter'}"

    Note
    The additional attribute ensures that the module with the classText formatter function is loaded and assigns it to the formatter alias.
    Result
    The <mvc:View> tag should now be similar to the following:XML code, highlighting the formatter function.

    Adapt the data binding for the flight class column (model property Class) in the booking table as follows to transfer the content of the Class model property to the external representation via the formatter function:
    Old	New
    XML

    <Text text="{Class}"/>

    	
    XML

    <Text text="{
      path: 'Class',
      formatter: 'formatter.classText'
    }"/>

    Result
    The data binding for the flight class column in the booking table should now look like this:XML code, highlighting the <Text> tag.

    Test run your application by starting it from the SAP Business Application Studio.

    Make sure that the technical values from the data model (C, Y, or F) are no longer displayed in the flight class column of the booking table, but the meaningful texts from the formatter function.

        Right-click on any subfolder in your sapui5-development-learning-journey project and select Preview Application from the context menu that appears.

        Select the npm script named start-noflp in the dialog that appears.

        In the opened application, check if the component works as expected.