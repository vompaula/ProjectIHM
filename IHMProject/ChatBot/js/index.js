//
//  index.js
//  ChatBot
//  Created by Ingenuity i/o on 2023/01/20
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
var clearInputCount = 0;
function clearInputCallback(type, name, valueType, value, myData) {
    console.log(name + " changed (impulsion)");
    //add code here if needed

    clearInputCount++;
    document.getElementById("clear_input").innerHTML = clearInputCount + " times";
}

function lastChatMessageInputCallback(type, name, valueType, value, myData) {
    console.log(name + " changed to " + value);
    //add code here if needed

    document.getElementById("lastChatMessage_input").innerHTML = value;
}

//services
function chatServiceCallback(senderAgentName, senderAgentUUID, serviceName, serviceArguments, token, myData) {
    var messageValue = serviceArguments[0].value;

    var log = senderAgentName + " called service " + serviceName;
    console.log(log)
    //add code here if needed

    var serviceLogsTextArea = document.getElementById("services_logs");
    serviceLogsTextArea.value = serviceLogsTextArea.value + log + "\n";
    serviceLogsTextArea.scrollTop = serviceLogsTextArea.scrollHeight;
}
function snapshotServiceCallback(senderAgentName, senderAgentUUID, serviceName, serviceArguments, token, myData) {
    var log = senderAgentName + " called service " + serviceName;
    console.log(log)
    //add code here if needed

    var serviceLogsTextArea = document.getElementById("services_logs");
    serviceLogsTextArea.value = serviceLogsTextArea.value + log + "\n";
    serviceLogsTextArea.scrollTop = serviceLogsTextArea.scrollHeight;
}
function clearServiceCallback(senderAgentName, senderAgentUUID, serviceName, serviceArguments, token, myData) {
    var log = senderAgentName + " called service " + serviceName;
    console.log(log)
    //add code here if needed

    var serviceLogsTextArea = document.getElementById("services_logs");
    serviceLogsTextArea.value = serviceLogsTextArea.value + log + "\n";
    serviceLogsTextArea.scrollTop = serviceLogsTextArea.scrollHeight;
}
function addShapeServiceCallback(senderAgentName, senderAgentUUID, serviceName, serviceArguments, token, myData) {
    var typeValue = serviceArguments[0].value;
    var xValue = serviceArguments[1].value;
    var yValue = serviceArguments[2].value;
    var widthValue = serviceArguments[3].value;
    var heightValue = serviceArguments[4].value;
    var fillValue = serviceArguments[5].value;
    var strokeValue = serviceArguments[6].value;
    var strokeWidthValue = serviceArguments[7].value;

    var log = senderAgentName + " called service " + serviceName;
    console.log(log)
    //add code here if needed

    var serviceLogsTextArea = document.getElementById("services_logs");
    serviceLogsTextArea.value = serviceLogsTextArea.value + log + "\n";
    serviceLogsTextArea.scrollTop = serviceLogsTextArea.scrollHeight;
}
function addTextServiceCallback(senderAgentName, senderAgentUUID, serviceName, serviceArguments, token, myData) {
    var textValue = serviceArguments[0].value;
    var xValue = serviceArguments[1].value;
    var yValue = serviceArguments[2].value;
    var colorValue = serviceArguments[3].value;

    var log = senderAgentName + " called service " + serviceName;
    console.log(log)
    //add code here if needed

    var serviceLogsTextArea = document.getElementById("services_logs");
    serviceLogsTextArea.value = serviceLogsTextArea.value + log + "\n";
    serviceLogsTextArea.scrollTop = serviceLogsTextArea.scrollHeight;
}
function addImageServiceCallback(senderAgentName, senderAgentUUID, serviceName, serviceArguments, token, myData) {
    var base64Value = serviceArguments[0].value;
    var xValue = serviceArguments[1].value;
    var yValue = serviceArguments[2].value;
    var widthValue = serviceArguments[3].value;
    var heightValue = serviceArguments[4].value;

    var log = senderAgentName + " called service " + serviceName;
    console.log(log)
    //add code here if needed

    var serviceLogsTextArea = document.getElementById("services_logs");
    serviceLogsTextArea.value = serviceLogsTextArea.value + log + "\n";
    serviceLogsTextArea.scrollTop = serviceLogsTextArea.scrollHeight;
}
function addImageFromUrlServiceCallback(senderAgentName, senderAgentUUID, serviceName, serviceArguments, token, myData) {
    var urlValue = serviceArguments[0].value;
    var xValue = serviceArguments[1].value;
    var yValue = serviceArguments[2].value;

    var log = senderAgentName + " called service " + serviceName;
    console.log(log)
    //add code here if needed

    var serviceLogsTextArea = document.getElementById("services_logs");
    serviceLogsTextArea.value = serviceLogsTextArea.value + log + "\n";
    serviceLogsTextArea.scrollTop = serviceLogsTextArea.scrollHeight;
}
function removeServiceCallback(senderAgentName, senderAgentUUID, serviceName, serviceArguments, token, myData) {
    var elementIdValue = serviceArguments[0].value;

    var log = senderAgentName + " called service " + serviceName;
    console.log(log)
    //add code here if needed

    var serviceLogsTextArea = document.getElementById("services_logs");
    serviceLogsTextArea.value = serviceLogsTextArea.value + log + "\n";
    serviceLogsTextArea.scrollTop = serviceLogsTextArea.scrollHeight;
}
function translateServiceCallback(senderAgentName, senderAgentUUID, serviceName, serviceArguments, token, myData) {
    var elementIdValue = serviceArguments[0].value;
    var dxValue = serviceArguments[1].value;
    var dyValue = serviceArguments[2].value;

    var log = senderAgentName + " called service " + serviceName;
    console.log(log)
    //add code here if needed

    var serviceLogsTextArea = document.getElementById("services_logs");
    serviceLogsTextArea.value = serviceLogsTextArea.value + log + "\n";
    serviceLogsTextArea.scrollTop = serviceLogsTextArea.scrollHeight;
}
function moveToServiceCallback(senderAgentName, senderAgentUUID, serviceName, serviceArguments, token, myData) {
    var elementIdValue = serviceArguments[0].value;
    var xValue = serviceArguments[1].value;
    var yValue = serviceArguments[2].value;

    var log = senderAgentName + " called service " + serviceName;
    console.log(log)
    //add code here if needed

    var serviceLogsTextArea = document.getElementById("services_logs");
    serviceLogsTextArea.value = serviceLogsTextArea.value + log + "\n";
    serviceLogsTextArea.scrollTop = serviceLogsTextArea.scrollHeight;
}
function getElementIdsServiceCallback(senderAgentName, senderAgentUUID, serviceName, serviceArguments, token, myData) {
    var log = senderAgentName + " called service " + serviceName;
    console.log(log)
    //add code here if needed

    var serviceLogsTextArea = document.getElementById("services_logs");
    serviceLogsTextArea.value = serviceLogsTextArea.value + log + "\n";
    serviceLogsTextArea.scrollTop = serviceLogsTextArea.scrollHeight;
}
function getElementsServiceCallback(senderAgentName, senderAgentUUID, serviceName, serviceArguments, token, myData) {
    var log = senderAgentName + " called service " + serviceName;
    console.log(log)
    //add code here if needed

    var serviceLogsTextArea = document.getElementById("services_logs");
    serviceLogsTextArea.value = serviceLogsTextArea.value + log + "\n";
    serviceLogsTextArea.scrollTop = serviceLogsTextArea.scrollHeight;
}

IGS.netSetServerURL("ws://localhost:5000");
IGS.agentSetName("ChatBot");
IGS.observeWebSocketState(isConnectedToServerChanged);



IGS.inputCreate("clear", iopTypes.IGS_IMPULSION_T, "");
IGS.inputCreate("lastChatMessage", iopTypes.IGS_STRING_T, "");

IGS.outputCreate("ui_error", iopTypes.IGS_STRING_T, "");
IGS.outputCreate("lastChatMessage", iopTypes.IGS_STRING_T, "");
IGS.outputCreate("ResponseChat", iopTypes.IGS_STRING_T, "");


//Initialize agent
IGS.observeInput("clear", clearInputCallback);
IGS.observeInput("lastChatMessage", lastChatMessageInputCallback);
IGS.serviceInit("chat", chatServiceCallback);
IGS.serviceArgAdd("chat", "message", iopTypes.IGS_STRING_T);
IGS.serviceInit("snapshot", snapshotServiceCallback);
IGS.serviceInit("clear", clearServiceCallback);
IGS.serviceInit("addShape", addShapeServiceCallback);
IGS.serviceArgAdd("addShape", "type", iopTypes.IGS_STRING_T);
IGS.serviceArgAdd("addShape", "x", iopTypes.IGS_DOUBLE_T);
IGS.serviceArgAdd("addShape", "y", iopTypes.IGS_DOUBLE_T);
IGS.serviceArgAdd("addShape", "width", iopTypes.IGS_DOUBLE_T);
IGS.serviceArgAdd("addShape", "height", iopTypes.IGS_DOUBLE_T);
IGS.serviceArgAdd("addShape", "fill", iopTypes.IGS_STRING_T);
IGS.serviceArgAdd("addShape", "stroke", iopTypes.IGS_STRING_T);
IGS.serviceArgAdd("addShape", "strokeWidth", iopTypes.IGS_DOUBLE_T);
IGS.serviceInit("addText", addTextServiceCallback);
IGS.serviceArgAdd("addText", "text", iopTypes.IGS_STRING_T);
IGS.serviceArgAdd("addText", "x", iopTypes.IGS_DOUBLE_T);
IGS.serviceArgAdd("addText", "y", iopTypes.IGS_DOUBLE_T);
IGS.serviceArgAdd("addText", "color", iopTypes.IGS_STRING_T);
IGS.serviceInit("addImage", addImageServiceCallback);
IGS.serviceArgAdd("addImage", "base64", iopTypes.IGS_DATA_T);
IGS.serviceArgAdd("addImage", "x", iopTypes.IGS_DOUBLE_T);
IGS.serviceArgAdd("addImage", "y", iopTypes.IGS_DOUBLE_T);
IGS.serviceArgAdd("addImage", "width", iopTypes.IGS_DOUBLE_T);
IGS.serviceArgAdd("addImage", "height", iopTypes.IGS_DOUBLE_T);
IGS.serviceInit("addImageFromUrl", addImageFromUrlServiceCallback);
IGS.serviceArgAdd("addImageFromUrl", "url", iopTypes.IGS_STRING_T);
IGS.serviceArgAdd("addImageFromUrl", "x", iopTypes.IGS_DOUBLE_T);
IGS.serviceArgAdd("addImageFromUrl", "y", iopTypes.IGS_DOUBLE_T);
IGS.serviceInit("remove", removeServiceCallback);
IGS.serviceArgAdd("remove", "elementId", iopTypes.IGS_INTEGER_T);
IGS.serviceInit("translate", translateServiceCallback);
IGS.serviceArgAdd("translate", "elementId", iopTypes.IGS_INTEGER_T);
IGS.serviceArgAdd("translate", "dx", iopTypes.IGS_DOUBLE_T);
IGS.serviceArgAdd("translate", "dy", iopTypes.IGS_DOUBLE_T);
IGS.serviceInit("moveTo", moveToServiceCallback);
IGS.serviceArgAdd("moveTo", "elementId", iopTypes.IGS_INTEGER_T);
IGS.serviceArgAdd("moveTo", "x", iopTypes.IGS_DOUBLE_T);
IGS.serviceArgAdd("moveTo", "y", iopTypes.IGS_DOUBLE_T);
IGS.serviceInit("getElementIds", getElementIdsServiceCallback);
IGS.serviceInit("getElements", getElementsServiceCallback);

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
function setui_errorOutput() {
    IGS.outputSetString("ui_error", document.getElementById("ui_error_output").value);
}

function setlastChatMessageOutput() {
    IGS.outputSetString("lastChatMessage", document.getElementById("lastChatMessage_output").value);
}

function setResponseChatOutput() {
    IGS.outputSetString("ResponseChat", document.getElementById("ResponseChat_output").value);
}

