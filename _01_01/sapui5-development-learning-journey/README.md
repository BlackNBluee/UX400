###    Using Densities for Controls

## Reference: https://learning.sap.com/courses/developing-uis-with-sapui5-1/using-densities-for-controls_ef068942-3030-474f-9436-4be3626f1f70

# Task 1: Implement a Method on the Component Controller to Determine the Required Content Density CSS Class
Steps

    Open the Component.js file from the webapp folder in the editor.

    Add the sap/ui/Device module to the dependency array of the component controller and a corresponding parameter named Device to the factory function.

    Note
    The Device API module is needed in the component controller to query the touch support of the user device in the next step.
    Result
    The component controller should now look like this:The resulting Component.js highlighting the sap/ui/Device code.

    Now add the following helper method to the component controller which queries the Device API for touch support of the user device and returns the CSS class sapUiSizeCozy if touch interaction is supported and sapUiSizeCompact for all other cases:
    JavaScript

    getContentDensityClass: function () {
      if (!this._sContentDensityClass) {
        if (Device.support.touch) {
          this._sContentDensityClass = "sapUiSizeCozy";
        } else {
          this._sContentDensityClass = "sapUiSizeCompact";
        }
      }
      return this._sContentDensityClass;
    }

    Result
    The component controller should now look like this:The resulting component controller code, highlighting the getContentDensityClass function.

# Task 2: Add the Determined Content Density CSS Class to the App View
Steps

    Open the controller of the App view (webapp/controller/App.controller.js file) in the editor.

    Add the following initialization method to the view controller to set the Content Density CSS Class returned by the helper method implemented above for the root view of the component:
    JavaScript

    onInit: function () {
      this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
    }

Result

The controller of the App view should now look like this:
The App.controller.js file, highlighting the onInit function.
# Task 3: Maintain the Supported Content Densities in the Application Descriptor
Steps

    Open the application descriptor manifest.json from the webapp folder in the editor.

    Change the value of the sap.ui5/contentDensities/compact property from false to true to indicate that the component supports the content density mode compact.

    Note
    The sap.ui5/contentDensities/cozy property already has a value of true.

        Modify the content of line 62 in the manifest.json file as follows:
        JSON

        "compact": ,

Result

The sap.ui5/contentDensities property in the application descriptor should now look like the following:
The manifest.json file. The compact attribute is set to true.
# Task 4: Make the Visibility as well as the Margins of the sap.m.Panel on the Overview View Device-Specific
Steps

    Open the Overview.view.xml file from the webapp/view folder in the editor.

    Add the following attributes to the <Panel> tag:
    XML

    class="sapUiResponsiveMargin sapUiHideOnPhone" width="auto"

    Note
    The CSS class sapUiResponsiveMargin makes the margins dependent on the screen width that is available. The width is set to auto since the margin would otherwise be added to the default width of 100% and exceed the page size. The CSS class sapUiHideOnPhone specifies that the panel should not be displayed on small screens (phones).
    Result
    The <Panel> tag on the Overview view should now look like this:The Overview.view.xml file, highlighting the class attribute.

    Test run your application by starting it from the SAP Business Application Studio.

    Check the following points:
        Make sure that the layout of the form is adapted to the available screen size.
        Make sure that the margin of the panel is responsive and adjusts to the screen size of the device.
        Make sure that the panel is not displayed on small screens (phones).
        Make sure that the component supports the content densities compact and cozy.

    Note

    You can change the size of the browser window to simulate the presentation of the component on large (desktop), mid-sized (tablet PC), and small (phones) screens.

    However, changing the window size does not let you test the different content densities, because touch support cannot be simulated in this way.

    To test the different content densities, you can use the device toolbar in the developer tools of the Google Chrome, Firefox, or Microsoft Edge browser: Start your application and, in the developer tools (F12), call the device toolbar with the key combination Ctrl + Shift + M. You can use the device toolbar to select a device you want to emulate. After you select the device, you have to refresh the browser (F5), to ensure that the onInit() method of the App view controller is called, where the content density is set specifically for the device type.

    Note

    Do not pay attention to the errors displayed in the console when in the developer tools. This is due to some code prepared for future exercises that is then not yet complete.

        Right-click on any subfolder in your sapui5-development-learning-journey project and select Preview Application from the context menu that appears.

        Select the npm script named start-noflp in the dialog that appears.

        In the opened application, check if the component is displayed as expected.