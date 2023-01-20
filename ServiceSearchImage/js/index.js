//
//  index.js
//  ServiceSearchImage version 1.0
//  Created by Ingenuity i/o on 2023/01/20
//
//  Il va appeler le service de whiteboard addImageFromUrl
//  Copyright © 2022 Ingenuity i/o. All rights reserved.
//

//server connection
function isConnectedToServerChanged(isConnected)
{
    if (isConnected)
        document.getElementById("connectedToServer").style.background = 'green';
    else
        document.getElementById("connectedToServer").style.background = 'red';
}

//inputs
function ReceiveResponsesInputCallback(type, name, valueType, value, myData) {
    console.log(name + " changed to " + value);
    //add code here if needed

    document.getElementById("ReceiveResponses_input").innerHTML = value;
}


IGS.netSetServerURL("ws://localhost:5000");
IGS.agentSetName("ServiceSearchImage");
IGS.observeWebSocketState(isConnectedToServerChanged);

IGS.definitionSetDescription("Il va appeler le service de whiteboard addImageFromUrl");
IGS.definitionSetVersion("1.0");


IGS.inputCreate("ReceiveResponses", iopTypes.IGS_STRING_T, "");

IGS.outputCreate("ShowImage", iopTypes.IGS_IMPULSION_T, "");


//Initialize agent
IGS.observeInput("ReceiveResponses", ReceiveResponsesInputCallback);

//actually start ingescape
IGS.start();


//
// HTML example
//

document.getElementById("serverURL").value = IGS.netServerURL();
document.getElementById("name").innerHTML = IGS.agentName();

function executeAction() {
    //add code here if needed
}

//update websocket config
function setServerURL() {
    IGS.netSetServerURL(document.getElementById("serverURL").value);
}

//write outputs
function setShowImageOutput() {
    IGS.outputSetImpulsion("ShowImage");
}

