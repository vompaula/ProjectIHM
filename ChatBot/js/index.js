//
//  index.js
//  Chatbot version 1.0
//  Created by Ingenuity i/o on 2023/02/10
//
//  no description
//  Copyright © 2023 Ingenuity i/o. All rights reserved.
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
function CommandInputCallback(type, name, valueType, value, myData) {
    console.log(name + " changed to " + value);
    //add code here if needed

    document.getElementById("Command_input").innerHTML = value;
}

function dataInputCallback(type, name, valueType, value, myData) {
    console.log(name + " changed to " + value);
    //add code here if needed

    document.getElementById("data_input").innerHTML = value;
}


IGS.netSetServerURL("ws://localhost:5001");
IGS.agentSetName("Chatbot");
IGS.observeWebSocketState(isConnectedToServerChanged);

IGS.definitionSetVersion("1.0");


IGS.inputCreate("Command", iopTypes.IGS_STRING_T, "");
IGS.inputCreate("data", iopTypes.IGS_STRING_T, "");

IGS.outputCreate("JSON", iopTypes.IGS_STRING_T, "");
IGS.outputCreate("reducedData", iopTypes.IGS_STRING_T, "");


//Initialize agent
IGS.observeInput("Command", CommandInputCallback);
IGS.observeInput("data", dataInputCallback);

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
function setJSONOutput() {
    IGS.outputSetString("JSON", document.getElementById("JSON_output").value);
}

function setreducedDataOutput() {
    IGS.outputSetString("reducedData", document.getElementById("reducedData_output").value);
}

