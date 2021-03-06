"use strict";

Sidebar.prototype.init = function () {
  var path = STENCIL_PATH;
  this.addSearchPalette(true);
  this.addD3TopicPalette(true);
  this.addD3InfoPalette(true);
  this.addD3PhysPalette(true);
  this.addGeneralPalette(false);
  this.addMiscPalette(false);
  this.addAdvancedPalette(false);
  this.addBasicPalette(path);
  this.addStencilPalette("arrows", mxResources.get("arrows"), path + "/arrows.xml", ";whiteSpace=wrap;html=1;fillColor=#ffffff;strokeColor=#000000;strokeWidth=2");
  this.addUmlPalette(false);
  this.addBpmnPalette(path, false);
  this.addStencilPalette("flowchart", "Flowchart", path + "/flowchart.xml", ";whiteSpace=wrap;html=1;fillColor=#ffffff;strokeColor=#000000;strokeWidth=2");
  this.addImagePalette("clipart", mxResources.get("clipart"), path + "/clipart/", "_128x128.png", "Earth_globe Empty_Folder Full_Folder Gear Lock Software Virus Email Database Router_Icon iPad iMac Laptop MacBook Monitor_Tower Printer Server_Tower Workstation Firewall_02 Wireless_Router_N Credit_Card Piggy_Bank Graph Safe Shopping_Cart Suit1 Suit2 Suit3 Pilot1 Worker1 Soldier1 Doctor1 Tech1 Security1 Telesales1".split(" "), null, {
    Wireless_Router_N: "wireless router switch wap wifi access point wlan",
    Router_Icon: "router switch"
  });
};
/*****D3Toic start*****/


Sidebar.prototype.addD3TopicPalette = function (expand) {
  var fns = [this.createVertexTemplateEntry("rounded=0;whiteSpace=wrap;html=1;layer=topic;fillColor=#ffe6cc;strokeColor=#d79b00;", 120, 60, "", "Function", null, null, "rect rectangle box"), this.createVertexTemplateEntry("text;html=1;strokeColor=none;layer=topic;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;", 40, 20, "Text", "Text", null, null, "text textbox textarea label"), this.addEntry("line lines connector connectors connection connections arrow arrows edge title", mxUtils.bind(this, function () {
    var edge = new mxCell("", new mxGeometry(0, 0, 0, 0), "endArrow=classic;html=1;class=inputoroutput;layer=topic;fillColor=#ffe6cc;strokeColor=#d79b00;");
    edge.geometry.setTerminalPoint(new mxPoint(0, 0), true);
    edge.geometry.setTerminalPoint(new mxPoint(100, 0), false);
    edge.geometry.relative = true;
    edge.edge = true;
    var cell = new mxCell("Input or Output", new mxGeometry(0, 0, 0, 0), "edgeLabel;resizable=0;html=1;align=center;verticalAlign=middle;");
    cell.geometry.relative = true;
    cell.setConnectable(false);
    cell.vertex = true;
    edge.insert(cell);
    return this.createEdgeTemplateFromCells([edge], 100, 0, "Input or Output");
  })), this.addEntry("line lines connector connectors connection connections arrow arrows edge title", mxUtils.bind(this, function () {
    var edge = new mxCell("", new mxGeometry(0, 0, 0, 0), "endArrow=classic;html=1;class=control;layer=topic;fillColor=#ffe6cc;strokeColor=#d79b00;");
    edge.geometry.setTerminalPoint(new mxPoint(0, 0), true);
    edge.geometry.setTerminalPoint(new mxPoint(0, 50), false);
    edge.geometry.relative = true;
    edge.edge = true;
    var cell = new mxCell("Control", new mxGeometry(0, 0, 0, 0), "edgeLabel;resizable=0;html=1;align=center;verticalAlign=middle;");
    cell.geometry.relative = true;
    cell.setConnectable(false);
    cell.vertex = true;
    edge.insert(cell);
    return this.createEdgeTemplateFromCells([edge], 0, 50, "Control");
  })), this.addEntry("line lines connector connectors connection connections arrow arrows edge title", mxUtils.bind(this, function () {
    var edge = new mxCell("", new mxGeometry(0, 0, 0, 0), "endArrow=classic;html=1;class=mechanism;layer=topic;fillColor=#ffe6cc;strokeColor=#d79b00;");
    edge.geometry.setTerminalPoint(new mxPoint(0, 0), true);
    edge.geometry.setTerminalPoint(new mxPoint(0, -50), false);
    edge.geometry.relative = true;
    edge.edge = true;
    var cell = new mxCell("Mechanism", new mxGeometry(0, 0, 0, 0), "edgeLabel;resizable=0;html=1;align=center;verticalAlign=middle;");
    cell.geometry.relative = true;
    cell.setConnectable(false);
    cell.vertex = true;
    edge.insert(cell);
    return this.createEdgeTemplateFromCells([edge], 0, 50, "Mechanism");
  }))];
  this.addPaletteFunctions("D3Topic", "D3Topic", null != expand ? expand : true, fns);
};
/*****D3Topic end*****/

/*****D3Info start*****/


Sidebar.prototype.addD3InfoPalette = function (expand) {
  var fns = [this.createVertexTemplateEntry("rounded=0;whiteSpace=wrap;html=1;layer=info;fillColor=#dae8fc;strokeColor=#6c8ebf;", 120, 60, "", "Function", null, null, "rect rectangle box"), this.createVertexTemplateEntry("text;html=1;strokeColor=none;layer=info;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;", 40, 20, "Text", "Text", null, null, "text textbox textarea label"), this.addEntry("line lines connector connectors connection connections arrow arrows edge title", mxUtils.bind(this, function () {
    var edge = new mxCell("", new mxGeometry(0, 0, 0, 0), "endArrow=classic;html=1;class=inputoroutput;layer=info;fillColor=#dae8fc;strokeColor=#6c8ebf;");
    edge.geometry.setTerminalPoint(new mxPoint(0, 0), true);
    edge.geometry.setTerminalPoint(new mxPoint(100, 0), false);
    edge.geometry.relative = true;
    edge.edge = true;
    var cell = new mxCell("Input or Output", new mxGeometry(0, 0, 0, 0), "edgeLabel;resizable=0;html=1;align=center;verticalAlign=middle;");
    cell.geometry.relative = true;
    cell.setConnectable(false);
    cell.vertex = true;
    edge.insert(cell);
    return this.createEdgeTemplateFromCells([edge], 100, 0, "Input or Output");
  })), this.addEntry("line lines connector connectors connection connections arrow arrows edge title", mxUtils.bind(this, function () {
    var edge = new mxCell("", new mxGeometry(0, 0, 0, 0), "endArrow=classic;html=1;class=control;layer=info;fillColor=#dae8fc;strokeColor=#6c8ebf;");
    edge.geometry.setTerminalPoint(new mxPoint(0, 0), true);
    edge.geometry.setTerminalPoint(new mxPoint(0, 50), false);
    edge.geometry.relative = true;
    edge.edge = true;
    var cell = new mxCell("Control", new mxGeometry(0, 0, 0, 0), "edgeLabel;resizable=0;html=1;align=center;verticalAlign=middle;");
    cell.geometry.relative = true;
    cell.setConnectable(false);
    cell.vertex = true;
    edge.insert(cell);
    return this.createEdgeTemplateFromCells([edge], 0, 50, "Control");
  })), this.addEntry("line lines connector connectors connection connections arrow arrows edge title", mxUtils.bind(this, function () {
    var edge = new mxCell("", new mxGeometry(0, 0, 0, 0), "endArrow=classic;html=1;class=mechanism;layer=info;fillColor=#dae8fc;strokeColor=#6c8ebf;");
    edge.geometry.setTerminalPoint(new mxPoint(0, 0), true);
    edge.geometry.setTerminalPoint(new mxPoint(0, -50), false);
    edge.geometry.relative = true;
    edge.edge = true;
    var cell = new mxCell("Mechanism", new mxGeometry(0, 0, 0, 0), "edgeLabel;resizable=0;html=1;align=center;verticalAlign=middle;");
    cell.geometry.relative = true;
    cell.setConnectable(false);
    cell.vertex = true;
    edge.insert(cell);
    return this.createEdgeTemplateFromCells([edge], 0, 50, "Mechanism");
  }))];
  this.addPaletteFunctions("D3Info", "D3Info", null != expand ? expand : true, fns);
};
/*****D3Info end*****/

/*****D3Phys start*****/


Sidebar.prototype.addD3PhysPalette = function (expand) {
  var fns = [this.createVertexTemplateEntry("rounded=0;whiteSpace=wrap;html=1;layer=phys;fillColor=#d5e8d4;strokeColor=#82b366;", 120, 60, "", "Function", null, null, "rect rectangle box"), this.createVertexTemplateEntry("text;html=1;strokeColor=none;layer=phys;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;", 40, 20, "Text", "Text", null, null, "text textbox textarea label"), this.addEntry("line lines connector connectors connection connections arrow arrows edge title", mxUtils.bind(this, function () {
    var edge = new mxCell("", new mxGeometry(0, 0, 0, 0), "endArrow=classic;html=1;class=inputoroutput;layer=phys;fillColor=#d5e8d4;strokeColor=#82b366;");
    edge.geometry.setTerminalPoint(new mxPoint(0, 0), true);
    edge.geometry.setTerminalPoint(new mxPoint(100, 0), false);
    edge.geometry.relative = true;
    edge.edge = true;
    var cell = new mxCell("Input or Output", new mxGeometry(0, 0, 0, 0), "edgeLabel;resizable=0;html=1;align=center;verticalAlign=middle;");
    cell.geometry.relative = true;
    cell.setConnectable(false);
    cell.vertex = true;
    edge.insert(cell);
    return this.createEdgeTemplateFromCells([edge], 100, 0, "Input or Output");
  })), this.addEntry("line lines connector connectors connection connections arrow arrows edge title", mxUtils.bind(this, function () {
    var edge = new mxCell("", new mxGeometry(0, 0, 0, 0), "endArrow=classic;html=1;class=control;layer=phys;fillColor=#d5e8d4;strokeColor=#82b366;");
    edge.geometry.setTerminalPoint(new mxPoint(0, 0), true);
    edge.geometry.setTerminalPoint(new mxPoint(0, 50), false);
    edge.geometry.relative = true;
    edge.edge = true;
    var cell = new mxCell("Control", new mxGeometry(0, 0, 0, 0), "edgeLabel;resizable=0;html=1;align=center;verticalAlign=middle;");
    cell.geometry.relative = true;
    cell.setConnectable(false);
    cell.vertex = true;
    edge.insert(cell);
    return this.createEdgeTemplateFromCells([edge], 0, 50, "Control");
  })), this.addEntry("line lines connector connectors connection connections arrow arrows edge title", mxUtils.bind(this, function () {
    var edge = new mxCell("", new mxGeometry(0, 0, 0, 0), "endArrow=classic;html=1;class=mechanism;layer=phys;fillColor=#d5e8d4;strokeColor=#82b366;");
    edge.geometry.setTerminalPoint(new mxPoint(0, 0), true);
    edge.geometry.setTerminalPoint(new mxPoint(0, -50), false);
    edge.geometry.relative = true;
    edge.edge = true;
    var cell = new mxCell("Mechanism", new mxGeometry(0, 0, 0, 0), "edgeLabel;resizable=0;html=1;align=center;verticalAlign=middle;");
    cell.geometry.relative = true;
    cell.setConnectable(false);
    cell.vertex = true;
    edge.insert(cell);
    return this.createEdgeTemplateFromCells([edge], 0, 50, "Mechanism");
  }))];
  this.addPaletteFunctions("D3Phys", "D3Phys", null != expand ? expand : true, fns);
};
/*****D3Phys end*****/