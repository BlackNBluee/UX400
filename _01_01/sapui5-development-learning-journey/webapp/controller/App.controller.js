sap.ui.define(["sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], function(Controller, MessageBox){
    "use strict";

    return Controller.extend("sap.training.exc.controller.App", {

        sayHello: function(){
            MessageBox.information("This button is pressed");
        }
    });
});