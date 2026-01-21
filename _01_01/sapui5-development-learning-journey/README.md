### Getting Started with SAPUI5 Development

## Reference: https://learning.sap.com/courses/developing-uis-with-sapui5-1/getting-started-with-sapui5-development_b2b142f9-fb05-4a51-bdae-a107ab360021

# Task 1: Create an SAP Fiori Dev Space
Steps

    If not already done, start the SAP Business Application Studio.

    Create an SAP Fiori dev space with the name UX400.

        Choose Create Dev Space.

        Enter UX400 as Dev Space name.

        Choose SAP Fiori as the application type.

        Choose the Create Dev Space button.

    Open your SAP Fiori dev space UX400.

    Note

    Immediately after creation, the new dev space is in the state STARTING. You must wait until it is in the state RUNNING before you can open it. This may take some time.

    After a period of idle time, the dev space is automatically stopped. A stopped dev space can be restarted with the dev space manager.

        Click the name UX400 of the new dev space as soon as it is in the state RUNNING.
        Result
        The SAP Fiori dev space UX400 opens and the Get Started page appears.

# Task 2: Clone a Prepared SAPUI5 Project
Steps

    Clone the prepared SAPUI5 project from Git using the following URL: https://github.com/SAP-samples/sapui5-development-learning-journey.git.

        In SAP Business Application Studio, click the Clone from Git tile on the Get Started page.

        Note
        If the Get Started page is not displayed, it can be opened using the following menu path: Help → Get Started.

        In the Provide repository URL field that appears, type https://github.com/SAP-samples/sapui5-development-learning-journey.git and press Enter.
        Result
        A copy of the specified Git repository is created for use in SAP Business Application Studio.

        To open the sapui5-development-learning-journey project you just created, Select Open in the pop-up.
        Result
        The sapui5-development-learning-journey project opens in SAP Business Application Studio.

    Download the required project dependencies using command npm install.

        Select Terminal → New Terminal from the SAP Business Application Studio menu.

        In the terminal window that appears, type npm install and press Enter:
        Code snippet

        Result
        The required project dependencies are downloaded to a folder named node_modules in the project directory.

# Task 3: Output 'Hello World' via the index.html Page in the Prepared SAPUI5 Project
Steps

    Open the index.html page in the editor.

        In the Explorer view of the SAP Business Application Studio, double-click webapp → index.html in the project structure of the sapui5-development-learning-journey project.
        Result
        The index.html page opens in an editor window.

    Add a <title> tag as a child to the <head> tag and use it to set the title of the HTML page to Exercise Application.

    Further, add a <div> tag as a child to the <body> tag and output Hello World over it on the HTML page.

        The index.html page should now look like this:
        Screenshot of the index.html page, highlighting the title and div tags.

    Test run your application by starting it from the SAP Business Application Studio.

        Right-click on any subfolder in your sapui5-development-learning-journey project and select Preview Application from the context menu that appears.

        Select the npm script named start-noflp in the dialog that appears.
        Result
        The application will now display in a new tab.

        Hint
        If the application does not appear in a new tab, please check your pop-up blocker settings.

        In the opened application, check if the adjustments you made to the index.html page are displayed.