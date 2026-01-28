### Using Expression Binding

## Reference: https://learning.sap.com/courses/developing-uis-with-sapui5-1/using-expression-binding_f526aa89-c886-4747-b74a-224648380e76

# Task 1: Set the enabled Property of the Create Customer Button Depending on the Value of the Input Field for the Customer Name
Steps

    Open the Overview.view.xml file from the webapp/view folder in the editor.

    Add the attribute valueLiveUpdate="true" to the Input UI element for the customer name.

    Note
    This causes the value of the value property of the Input UI element to be updated after each keystroke. Otherwise, the value would not be updated until the input field is exited or the Enter key is pressed.
    Result
    The form for the customer data should now look like this:The Overview.view.xml file, highlighting the valueLiveUpdate attribute..

    Now add the enabled attribute to the Create Customer button. Assign it the value true or false as follows to ensure that the button is only enabled if the form field for the customer name contains a value:
    XML

    enabled="{= ${customer>/CustomerName} !== undefined && ${customer>/CustomerName}.length > 0 }"

    Note
    Because of the valueLiveUpdate attribute you added to the customer name field above, the button will be enabled as soon as you enter the first character in the empty customer name field. Conversely, the button will be disabled as soon as you delete the last character in the customer name field.
    Result
    The Create Customer button should now look like this:The Overview.view.xml file, highlighting the enabled attribute.

# Task 2: Format the Cancellation Status in the Booking Table Using Icons from the SAPUI5 Icon FontImp
Steps

    Make sure that the Overview.view.xml file is open in the editor.

    The cancellation status is currently displayed in the booking table via a Text UI element. This shows the content of the IsCancelled model property, which contains an X if a booking was cancelled.

    Using expression binding, the sap-icon://cancel icon from the SAPUI5 icon font should now be displayed if a booking has been cancelled. For non-cancelled bookings, the sap-icon://accept icon should be displayed.

    For this reformatting, delete <Text text="{IsCancelled}"/> from the cells aggregation and replace it with the following Icon UI element. In addition to the icons, the tooltips cancelled and not cancelled are also set.
    XML

    <core:Icon src="{= ${IsCancelled} === 'X' ? 'sap-icon://cancel' : 'sap-icon://accept' }"
               tooltip="{= ${IsCancelled} === 'X' ? 'cancelled' : 'not cancelled' }"/>

    Note
    The available icons can be looked up via the Icon Explorer tool in the SAPUI5 Demo Kit.
    Result
    The booking table should now look like this:The resulting XML file, highlighting the core:Icon tag.

    Test run your application by starting it from the SAP Business Application Studio.

    Make sure that the Create Customer button is enabled only when the customer name input field contains a value. Also make sure the cancellation status in the booking table is now displayed via icons with tooltip.

        Right-click on any subfolder in your sapui5-development-learning-journey project and select Preview Application from the context menu that appears.

        Select the npm script named start-noflp in the dialog that appears.

        In the opened application, check if the component works as expected.
Steps

    Make sure that the Overview.view.xml file is open in the editor.

    In the customer table, add the following attribute to the <Column> tags for Street and Post Code to display these columns on desktops, but hide them on tablets and phones:

    XML

    minScreenWidth="Desktop"

    Further, in the customer table, add the following attribute to the
    <Column> tag for Country to display this column on tablets and desktops, but hide it on phones:
    XML

    minScreenWidth="Tablet"

    Finally, add the following attributes to the
    <Column> tag for Email to display this column on tablets and desktops. On phones, the column will be displayed as a pop-in instead of being hidden:
    XML

    minScreenWidth="Tablet" demandPopin="true"

    Result
    The definition of the columns of the customer table should now look like this:The XML code, highlighting minScreenWidth attributes.

    In the booking table, add the following attributes to the <Column> tag for Class to display this column on desktops. On tablets and phones, the column will be displayed as a pop-in instead of being hidden:

    XML

    minScreenWidth="Desktop" demandPopin="true"

    Finally, in the booking table, add the following attributes to the
    <Column> tags for Foreign Currency Payment and Cancellation Status to display these columns on tablets and desktops. On phones, the columns will be displayed as a pop-in instead of being hidden:
    XML

    minScreenWidth="Tablet" demandPopin="true"

    Result
    The definition of the columns of the booking table should now look like this:The XML code, highlighting minScreenWidth attributes.

    Test run your application by starting it from the SAP Business Application Studio.

    Make sure that the New Customer panel is expanded on desktops and it is not possible to collapse it. On all other devices, the panel should be initially collapsed with the option to expand it.

    Note

    Please note that the panel is hidden on phones because of the sapUiHideOnPhone CSS class assigned. Therefore, you should use a tablet as a comparison to the desktop.

    To test the difference between desktop and tablet, you can use the device toolbar in the developer tools of the Google Chrome, Firefox or Microsoft Edge browser: Start your application and, in the developer tools (F12), call the device toolbar with the key combination Ctrl + Shift + M. You can use the device toolbar to select a device you want to emulate. After you select the device, you have to refresh the browser (F5), to ensure that the init() method of the component controller is called, where the device model is initialized.

    Note

    Do not pay attention to the errors displayed in the console when in the developer tools. This is due to some code prepared for future exercises that is then not yet complete.
    Also make sure that the columns of the two tables are displayed in a device-specific way.

    Note
    To test the responsive behavior of the tables, it is sufficient - in contrast to the display of the panel - to change the size of the browser window. This allows you to simulate the display of the tables on desktops, tablets and phones.

        Right-click on any subfolder in your sapui5-development-learning-journey project and select Preview Application from the context menu that appears.

        Select the npm script named start-noflp in the dialog that appears.

        In the opened application, check if the component works as expected.
Steps

    Make sure that the Overview.view.xml file is open in the editor.

    In the next step, you will add a header toolbar to the customer table. However, if the headerToolbar aggregation used for this is set for the table, SAPUI5 ignores the headerText property. Therefore, delete the headerText="Customers" attribute from the <Table> tag for the customer table. You will use the header toolbar to set a title for the table again in the next step.
    Result
    The <Table> tag for the customer table should now look similar to the following:The XML file, with the table attribute highlighted.

    Now add the following headerToolbar aggregation to the customer table to create a toolbar with a table title and a search field:
    XML

    <headerToolbar>
      <Toolbar>
        <Title text="Customers"/>
        <ToolbarSpacer/>
        <SearchField width="40%" search=".onFilterCustomers"/>
      </Toolbar>
    </headerToolbar>

    Note
    The title serves as a replacement for the header text deleted above. The search field allows the user to enter a filter value, whereby the content of the customer table is to be updated so that only customers whose name matches the filter value entered are displayed in the table. For this purpose, the onFilterCustomers event handler method, which is yet to be implemented, is registered for the search event of the search field.
    Result
    The customer table with the added toolbar should now look like this:The XML file, highlighting the headerToolbar tag.

    In the implementation of the onFilterCustomers event handler method registered above, the customer table will be accessed. For this purpose, specify an Id for the Table UI element by adding the attribute id="customerTable" to the <Table> tag for the customer table.
    Result
    The <Table> tag for the customer table should now look similar to the following:The XML file, highlighting the id=customerTable attribute.

    Now open the Overview.controller.js file from the webapp/controller folder in the editor.

    For the implementation of the onFilterCustomers event handler method on the view controller the modules sap/ui/model/Filter and sap/ui/model/FilterOperator are needed. Add these two modules to the dependency array of the view controller and the corresponding parameters named Filter and FilterOperator to the factory function of the view controller.
    Result
    The view controller should now look like this:The resulting controller.js file.

    Now add the onFilterCustomers event handler method registered for the search event of the search field to the view controller. Implement this method as follows to filter the table content by the customer name:
    JavaScript

    onFilterCustomers: function (oEvent) {
      var aFilter = [];
      var sQuery = oEvent.getParameter("query");
      if (sQuery && sQuery.length > 0) {
        aFilter.push(new Filter("CustomerName", FilterOperator.Contains, sQuery));
      }

      var oTable = this.byId("customerTable");
      var oBinding = oTable.getBinding("items");
      oBinding.filter(aFilter);
    }

    Note

    The search event defines a query parameter that contains the search string that the user entered in the search field. This query parameter is accessed by calling getParameter("query") on the oEvent parameter.

    If the search string is not empty, a new filter object is constructed and added to the still empty array of filters. The defined filter searches for the passed search string in the CustomerName model property. The FilterOperator.Contains filter operator used in this process is not case sensitive.

    The customer table is accessed using the Id you specified in the view. On the table control, the binding of the items aggregation is accessed to filter it with the newly constructed filter object. This automatically filters the table by the search string so that only the matching items are displayed when the search is triggered.

    However, if the query parameter is empty, the binding will be filtered with an empty array. This ensures that you see all table entries again.
    Result
    The view controller should now contain the following additional method:The view controller with the event handler method.

    Test run your application by starting it from the SAP Business Application Studio.

    Make sure that the entries in the customer table are initially sorted and grouped. Also make sure that the table content can be filtered by customer name using the search field in the toolbar.

        Right-click on any subfolder in your sapui5-development-learning-journey project and select Preview Application from the context menu that appears.

        Select the npm script named start-noflp in the dialog that appears.

        In the opened application, check if the component works as expected.