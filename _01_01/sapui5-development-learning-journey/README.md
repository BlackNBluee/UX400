### Bootstrapping SAPUI5

## Reference: https://learning.sap.com/courses/developing-uis-with-sapui5-1/bootstrapping-sapui5_a5b2d3e2-530e-4a47-9756-321b5edf152a

# Task 1: Add a Bootstrap Script
Steps

    Make sure that the index.html file is open in the editor.

        To open the index.html file in the editor, proceed as follows: In the Explorer view of the SAP Business Application Studio, double-click webapp → index.html in the project structure of the sapui5-development-learning-journey project.

    Add the following <script> tag as a child to the <head> tag to load and initialize SAPUI5:
    JavaScript

    <script
      id="sap-ui-bootstrap"
      src="resources/sap-ui-core.js"
      data-sap-ui-theme="sap_fiori_3"
      data-sap-ui-libs="sap.m"
      data-sap-ui-compatVersion="edge"
    ></script>

    Note

    The src attribute of the <script> tag tells the browser where to find the SAPUI5 core library – it initializes the SAPUI5 runtime and loads additional resources, such as the sap.m library that is specified in the data-sap-ui-libs attribute and that contains the UI controls needed for the application.

    In addition, sap_fiori_3 is set as default theme and the compatibility version is defined as edge to make use of the most recent functionality of SAPUI5.

        Make sure that the index.html page now looks like this:
        Screenshot of the HTML code, highlighting the script tag.

# Task 2: Add a Text UI Element
Steps

    Delete the Hello World <div> tag you created in the previous exercise from the <body> of the HTML page.

        The <body> of the HTML page should now be empty again:
        Code Snippet

        <body>
        </body>

    Add the class="sapUiBody" and id="content" attributes to the <body> tag.

    Note

    The class sapUiBody adds additional theme-dependent styles for displaying SAPUI5 apps.

        The <body> tag should now look like this:
        Code Snippet

        <body >
        </body>

    Now create a sap.m.Text UI element with the text Hello Word and place it in the <body> of the HTML page using the id of the <body>. For this purpose, create the following <script> tag as another child of the <head> tag directly behind the bootstrap script created above:
    JavaScript

    <script>
      var oText = new sap.m.Text({text: "Hello World"});
      oText.placeAt("content");
    </script>

        The <head> and <body> of the HTML page should now look like this:
        Screenshot of the HTML code, highlighting the script tag.

    Test run your application by starting it from the SAP Business Application Studio.

        Right-click on any subfolder in your sapui5-development-learning-journey project and select Preview Application from the context menu that appears.

        Select the npm script named start-noflp in the dialog that appears.
        Result
        The application now displays in a new tab.

        Hint
        If the application does not appear in a new tab, please check your pop-up blocker settings.

        In the opened application, check if the Hello World text of the sap.m.Text UI element is displayed on the HTML page.