###   Structuring the UI with Controls

## Reference: https://learning.sap.com/courses/developing-uis-with-sapui5-1/structuring-the-ui-with-controls_b072eddd-a5cf-495f-ac69-aa2c9fb76b5a

# Task 1: Implement the View with the Form
Steps

    Open the Overview.view.xml file from the webapp/view folder in the editor.

    Note
    For simplicity, the XML view file in which the form will be implemented is already included in the project. Also the corresponding view controller file Overview.controller.js is already present in the webapp/controller folder.

    Add the following attributes to the <mvc:View> tag to declare the XML namespaces required for the view implementation:
    XML

    xmlns:f="sap.ui.layout.form"
    xmlns:core="sap.ui.core"

    Result
    The Overview view should now look like this:The resulting Overview.view.xml code.

    Insert the following coding into the <mvc:View> tag to define a sap.m.Page on the view with a sap.m.Panel, which in turn contains the desired sap.ui.layout.form.SimpleForm.

    Note
    The functionality of the Create Customer button in the toolbar of the form will only be implemented in a later exercise via an event handler.
    XML

    <Page title="Flight Customers">
      <content>
        <Panel headerText="New Customer" expandable="true" expanded="true">
          <content>
            <f:SimpleForm layout="ColumnLayout" editable="true">
              <f:toolbar>
                <Toolbar>
                  <content>
                    <ToolbarSpacer/>
                    <Button icon="sap-icon://create" text="Create Customer"/>
                  </content>
                </Toolbar>
              </f:toolbar>
              <f:content>
                <core:Title text="General Data"/>
                <Label text="Form"/>
                <Input value=""/>
                <Label text="Customer Name"/>
                <Input value=""/>
                <Label text="Discount"/>
                <Input value=""/>
                <core:Title text="Address Data"/>
                <Label text="Street"/>
                <Input value=""/>
                <Label text="Post Code"/>
                <Input value=""/>
                <Label text="City"/>
                <Input value=""/>
                <Label text="Country"/>
                <Input value=""/> 
                <core:Title text="Contact Data"/>
                <Label text="Email"/>    
                <Input value=""/>
                <Label text="Telephone"/>
                <Input value=""/>     
              </f:content>
            </f:SimpleForm>
          </content>
        </Panel>
      </content>
    </Page>

Result

The Overview view should now look like this:
The Overview.view.xml file, highlighting the Page tag.
# Task 2: Refer to the Form View from the App View
Steps

    Open the App.view.xml file from the webapp/view folder in the editor.

    Add the following attribute to the <mvc:View> tag to make the full-screen height of the view work properly:
    XML

    displayBlock="true"

    Result
    The App view should now look like this:The app.view.xml file, highlighting the displayBlock attribute.

    Delete the Say Hello button from the App view.

        Delete the following line:
        XML

        <Button text="Say Hello" press=".onSayHello"/>

    Insert the following code into the<mvc:View> tag to embed the Overview view in the pages aggregation of a sap.m.App UI element, which in turn is wrapped in a sap.m.Shell:
    XML

    <Shell>
      <App>
        <pages>
          <mvc:XMLView viewName="sap.training.exc.view.Overview"/>
        </pages>
      </App>
    </Shell>

Result

The App view should now look like this:
The App.view.xml file, highlighting the Shell tag.
# Task 3: Adjust the App View Controller
Steps

    Open the App.controller.js file from the webapp/controller folder in the editor.

    Note
    Since the Say Hello button on the App view was deleted in the previous step, all button-related code is now deleted from the view controller.

    Delete the onSayHello event handler method from the view controller.

        Delete the following lines:
        JavaScript

        onSayHello: function () {
          MessageBox.information("Hello World");
        }

    Remove module sap/m/MesssageBox from the dependency array and the corresponding interface parameter MessageBox from the factory function of the view controller.
    Result
    The view controller should now look like this:The resulting App.controller.js file.

    Test run your application by starting it from the SAP Business Application Studio.

        Right-click on any subfolder in your sapui5-development-learning-journey project and select Preview Application from the context menu that appears.

        Select the npm script named start-noflp in the dialog that appears.

        In the opened application, check if the component with the form is displayed as expected.