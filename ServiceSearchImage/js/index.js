//
//  index.js
//  ServiceSearchImage version 1.0
//  Created by Ingenuity i/o on 2023/01/24
//
//  no description
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
    console.log(name + " changed (" + value.byteLength + " bytes)");
    var hexString = Array.prototype.map.call(new Uint8Array(value), x => (('0' + x.toString(16)).slice(-2))).join("");
    console.log("Hexadecimal string : " + hexString);
    //add code here if needed

    document.getElementById("ReceiveResponses_input").innerHTML = value.byteLength + " bytes";
}


IGS.netSetServerURL("ws://localhost:5000");
IGS.agentSetName("ServiceSearchImage");
IGS.observeWebSocketState(isConnectedToServerChanged);

IGS.definitionSetVersion("1.0");


IGS.inputCreate("ReceiveResponses", iopTypes.IGS_DATA_T, new ArrayBuffer());

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
    let argList = [] ;
    const url = String(document.getElementById("url").value);
    console.log("url "+ url);
    argList = IGS.serviceArgsAddString(argList, url);
    argList = IGS.serviceArgsAddDouble(argList, 0);
    argList = IGS.serviceArgsAddDouble(argList, 0);
    IGS.serviceCall("Whiteboard",  "addImageFromUrl",argList,"");

    const axios = require('axios');

// set up the request parameters
const params = {
  api_key: "demo",
  q: "pizza",
  search_type: "images",
  location: "United+States"
}

// make the http GET request
axios.get('https://api.scaleserp.com"/search', { params })
  .then(response => {

    // print the JSON response
    console.log(JSON.stringify(response.data, 0, 2));

  }).catch(error => {
    // catch and print the error
    console.log(error);
  })
}

//update websocket config
function setServerURL() {
    IGS.netSetServerURL(document.getElementById("serverURL").value);
}

//write outputs
function setShowImageOutput() {
    IGS.outputSetImpulsion("ShowImage");
}

