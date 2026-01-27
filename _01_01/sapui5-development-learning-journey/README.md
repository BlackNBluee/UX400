### Sorting and Filtering

## Reference: https://learning.sap.com/courses/developing-uis-with-sapui5-1/sorting-and-filtering_c49a908a-4cef-4234-bcfd-a32d0f03e7de

# Task 1: Sort and Group the Data in the Customer Table Initially
Steps

    Open the Overview.view.xml file from the webapp/view folder in the editor.

    Implement declaratively that the entries in the customer table are initially sorted and grouped as follows: The customers are to be sorted in ascending order by city and, as a second sort criterion, in ascending order by customer name. In addition, the data should be grouped by the city.

    To do this, change the data binding specified via the items attribute in the <Table> tag for the customer table as follows:
    Old	New
    XML

    items="{/Customers}"

    	
    XML

    items="{
      path: '/Customers',
      sorter: [
        {path: 'City', group: true},
        {path: 'CustomerName'} ]
    }"

Result

The data binding for the customer table should now look like this:
Screenshot of the XML code, highlighting the items attribute.
# Task 2: Implement a Filter Option with regard to the Customer Name
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