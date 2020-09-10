/*****sidebar setting for digital triplet start *****/
Sidebar.prototype.init = function () {
  var path = STENCIL_PATH;
  this.addSearchPalette(false);
  this.addD3TopicPalette(true);
  this.addD3InfoPalette(true);
  this.addD3PhysPalette(true);
  this.addGeneralPalette(false);
  this.addUmlPalette(false);

};

/*****D3Topic start*****/
Sidebar.prototype.addD3TopicPalette = function (expand) {
  var sb = this;
  var fns = [
    this.createVertexTemplateEntry(
      "rounded=0;whiteSpace=wrap;html=1;layer=topic;fillColor=#ffe6cc;strokeColor=#d79b00;",
      120,
      60,
      "",
      "Function",
      null,
      null,
      "rect rectangle box"
    ),
    this.createVertexTemplateEntry(
      "text;html=1;strokeColor=none;layer=topic;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;",
      40,
      20,
      "Text",
      "Text",
      null,
      null,
      "text textbox textarea label"
    ),

    this.addEntry(
      "line lines connector connectors connection connections arrow arrows edge title",
      mxUtils.bind(this, function () {
        var edge = new mxCell(
          "",
          new mxGeometry(0, 0, 0, 0),
          "endArrow=classic;html=1;class=Input/Output;layer=topic;fillColor=#ffe6cc;strokeColor=#d79b00;"
        );
        edge.geometry.setTerminalPoint(new mxPoint(0, 0), true);
        edge.geometry.setTerminalPoint(new mxPoint(100, 0), false);
        edge.geometry.relative = true;
        edge.edge = true;
        var cell = new mxCell(
          "Input/Output",
          new mxGeometry(0, 0, 0, 0),
          "edgeLabel;resizable=0;html=1;align=center;verticalAlign=middle;"
        );
        cell.geometry.relative = true;
        cell.setConnectable(false);
        cell.vertex = true;
        edge.insert(cell);
        return this.createEdgeTemplateFromCells([edge], 100, 0, "Input/Output");
      })
    ),

    this.addEntry('uml relation', function () {
      var edge = new mxCell('Control', new mxGeometry(0, 0, 0, 0), 'endArrow=classic;endFill=1;html=1;edgeStyle=orthogonalEdgeStyle;align=center;verticalAlign=bottom;layer=topic;fillColor=#ffe6cc;strokeColor=#d79b00;');
      edge.geometry.setTerminalPoint(new mxPoint(0, 0), true);
      edge.geometry.setTerminalPoint(new mxPoint(0, 50), false);
      edge.geometry.relative = true;
      edge.geometry.x = -1;
      edge.edge = true;

      var cell = new mxCell('Reason', new mxGeometry(-0.1, 0, 0, 0), 'edgeLabel;resizable=0;html=1;align=center;verticalAlign=middle;');
      cell.geometry.relative = true;
      cell.setConnectable(false);
      cell.vertex = true;
      edge.insert(cell);

      return sb.createEdgeTemplateFromCells([edge], 0, 50, 'Control');
    }),

    this.addEntry('uml relation', function () {
      var edge = new mxCell('Mechanism', new mxGeometry(0, 0, 0, 0), 'endArrow=classic;endFill=1;html=1;edgeStyle=orthogonalEdgeStyle;align=center;verticalAlign=middle;layer=topic;fillColor=#ffe6cc;strokeColor=#d79b00;');
      edge.geometry.setTerminalPoint(new mxPoint(0, 0), true);
      edge.geometry.setTerminalPoint(new mxPoint(0, -50), false);
      edge.geometry.relative = true;
      edge.edge = true;

      return sb.createEdgeTemplateFromCells([edge], 0, 50, 'Control');
    }),
    this.createVertexTemplateEntry('swimlane;layer=topic;fillColor=#ffe6cc;strokeColor=#d79b00;', 200, 200, 'Container', 'Container', null, null, 'container swimlane lane pool group'),
    this.addEntry('uml sequence invoke call delegation synchronous invocation activation', function()
		{
	    	var cell1 = new mxCell('Data Collect', new mxGeometry(0, 0, 120, 60), 'html=1;points=[];perimeter=orthogonalPerimeter;layer=topic;fillColor=#ffe6cc;strokeColor=#d79b00;');
        cell1.vertex = true;
        var cell2 = new mxCell('Info Analyze', new mxGeometry(190, 0, 120, 60), 'html=1;points=[];perimeter=orthogonalPerimeter;layer=topic;fillColor=#ffe6cc;strokeColor=#d79b00;');
        cell2.vertex = true;
        var cell3 = new mxCell('Decide', new mxGeometry(380, 0, 120, 60), 'html=1;points=[];perimeter=orthogonalPerimeter;layer=topic;fillColor=#ffe6cc;strokeColor=#d79b00;');
        cell3.vertex = true;
        var cell4 = new mxCell('Execute', new mxGeometry(570, 0, 120, 60), 'html=1;points=[];perimeter=orthogonalPerimeter;layer=topic;fillColor=#ffe6cc;strokeColor=#d79b00;');
	    	cell4.vertex = true;
	    	
        var edge1 = new mxCell('', new mxGeometry(0, 0, 0, 0), 'html=1;verticalAlign=bottom;endArrow=block;entryX=0;entryY=0.5;layer=topic;fillColor=#ffe6cc;strokeColor=#d79b00;');
        edge1.geometry.setTerminalPoint(new mxPoint(-70, 30), true);
        edge1.geometry.setTerminalPoint(new mxPoint(0, 30), false);
        edge1.geometry.relative = true;
        edge1.edge = true;
        
        var edge2 = new mxCell('', new mxGeometry(0, 0, 0, 0), 'html=1;verticalAlign=bottom;endArrow=block;endSize=8;entryX=0;entryY=0.5;exitX=1;exitY=0.5;layer=topic;fillColor=#ffe6cc;strokeColor=#d79b00;');
        edge2.geometry.setTerminalPoint(new mxPoint(120, 30), true);
        edge2.geometry.setTerminalPoint(new mxPoint(190, 30), false);
        edge2.geometry.relative = true;
        edge2.edge = true;

        var edge3 = new mxCell('', new mxGeometry(0, 0, 0, 0), 'html=1;verticalAlign=bottom;endArrow=block;endSize=8;entryX=0;entryY=0.5;exitX=1;exitY=0.5;layer=topic;fillColor=#ffe6cc;strokeColor=#d79b00;');
        edge3.geometry.setTerminalPoint(new mxPoint(310, 30), true);
        edge3.geometry.setTerminalPoint(new mxPoint(380, 30), false);
        edge3.geometry.relative = true;
        edge3.edge = true;

        var edge4 = new mxCell('', new mxGeometry(0, 0, 0, 0), 'html=1;verticalAlign=bottom;endArrow=block;endSize=8;entryX=0;entryY=0.5;exitX=1;exitY=0.5;layer=topic;fillColor=#ffe6cc;strokeColor=#d79b00;');
        edge4.geometry.setTerminalPoint(new mxPoint(500, 30), true);
        edge4.geometry.setTerminalPoint(new mxPoint(570, 30), false);
        edge4.geometry.relative = true;
        edge4.edge = true;

        var edge5 = new mxCell('', new mxGeometry(0, 0, 0, 0), 'html=1;verticalAlign=bottom;endArrow=block;endSize=8;exitX=1;exitY=0.5;layer=topic;fillColor=#ffe6cc;strokeColor=#d79b00;');
        edge5.geometry.setTerminalPoint(new mxPoint(690, 30), true);
        edge5.geometry.setTerminalPoint(new mxPoint(780, 30), false);
        edge5.geometry.relative = true;
        edge5.edge = true;
        
        cell1.insertEdge(edge1, false);
        cell1.insertEdge(edge2, true);
        cell2.insertEdge(edge2, false);
        cell2.insertEdge(edge3, true);
        cell3.insertEdge(edge3, false);
        cell3.insertEdge(edge4, true);
        cell4.insertEdge(edge4, false);
        cell4.insertEdge(edge5, true);

			return sb.createVertexTemplateFromCells([cell1, cell2, cell3, cell4, edge1, edge2, edge3, edge4, edge5], 640, 60, 'Engineering Cycle');
		}),


  ];
  this.addPaletteFunctions("D3Topic", "D3Topic", null != expand ? expand : true, fns);
};
/*****D3Topic end*****/

/*****D3Info start*****/
Sidebar.prototype.addD3InfoPalette = function (expand) {
  var sb=this;
  var fns = [
    this.createVertexTemplateEntry(
      "rounded=0;whiteSpace=wrap;html=1;layer=info;fillColor=#dae8fc;strokeColor=#6c8ebf;",
      120,
      60,
      "",
      "Function",
      null,
      null,
      "rect rectangle box"
    ),
    this.createVertexTemplateEntry(
      "text;html=1;strokeColor=none;layer=info;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;",
      40,
      20,
      "Text",
      "Text",
      null,
      null,
      "text textbox textarea label"
    ),

    this.addEntry(
      "line lines connector connectors connection connections arrow arrows edge title",
      mxUtils.bind(this, function () {
        var edge = new mxCell(
          "",
          new mxGeometry(0, 0, 0, 0),
          "endArrow=classic;html=1;class=Input/Output;layer=info;fillColor=#dae8fc;strokeColor=#6c8ebf;"
        );
        edge.geometry.setTerminalPoint(new mxPoint(0, 0), true);
        edge.geometry.setTerminalPoint(new mxPoint(100, 0), false);
        edge.geometry.relative = true;
        edge.edge = true;
        var cell = new mxCell(
          "Input/Output",
          new mxGeometry(0, 0, 0, 0),
          "edgeLabel;resizable=0;html=1;align=center;verticalAlign=middle;"
        );
        cell.geometry.relative = true;
        cell.setConnectable(false);
        cell.vertex = true;
        edge.insert(cell);
        return this.createEdgeTemplateFromCells([edge], 100, 0, "Input/Output");
      })
    ),

    this.addEntry('uml relation', function () {
      var edge = new mxCell('Control', new mxGeometry(0, 0, 0, 0), 'endArrow=classic;endFill=1;html=1;edgeStyle=orthogonalEdgeStyle;align=center;verticalAlign=bottom;layer=info;fillColor=#dae8fc;strokeColor=#6c8ebf;');
      edge.geometry.setTerminalPoint(new mxPoint(0, 0), true);
      edge.geometry.setTerminalPoint(new mxPoint(0, 50), false);
      edge.geometry.relative = true;
      edge.geometry.x = -1;
      edge.edge = true;

      var cell = new mxCell('Reason', new mxGeometry(-0.1, 0, 0, 0), 'edgeLabel;resizable=0;html=1;align=center;verticalAlign=middle;');
      cell.geometry.relative = true;
      cell.setConnectable(false);
      cell.vertex = true;
      edge.insert(cell);

      return sb.createEdgeTemplateFromCells([edge], 0, 50, 'Control');
    }),

    this.addEntry('uml relation', function () {
      var edge = new mxCell('Mechanism', new mxGeometry(0, 0, 0, 0), 'endArrow=classic;endFill=1;html=1;edgeStyle=orthogonalEdgeStyle;align=center;verticalAlign=middle;layer=info;fillColor=#dae8fc;strokeColor=#6c8ebf;');
      edge.geometry.setTerminalPoint(new mxPoint(0, 0), true);
      edge.geometry.setTerminalPoint(new mxPoint(0, -50), false);
      edge.geometry.relative = true;
      edge.edge = true;

      return sb.createEdgeTemplateFromCells([edge], 0, 50, 'Control');
    }),
    this.createVertexTemplateEntry('swimlane;layer=info;fillColor=#dae8fc;strokeColor=#6c8ebf;', 200, 200, 'Container', 'Container', null, null, 'container swimlane lane pool group'),
    this.addEntry('uml sequence invoke call delegation synchronous invocation activation', function()
		{
	    	var cell1 = new mxCell('Data Collect', new mxGeometry(0, 0, 120, 60), 'html=1;points=[];perimeter=orthogonalPerimeter;layer=topic;fillColor=#dae8fc;strokeColor=#6c8ebf;');
        cell1.vertex = true;
        var cell2 = new mxCell('Info Analyze', new mxGeometry(190, 0, 120, 60), 'html=1;points=[];perimeter=orthogonalPerimeter;layer=topic;fillColor=#dae8fc;strokeColor=#6c8ebf;');
        cell2.vertex = true;
        var cell3 = new mxCell('Decide', new mxGeometry(380, 0, 120, 60), 'html=1;points=[];perimeter=orthogonalPerimeter;layer=topic;fillColor=#dae8fc;strokeColor=#6c8ebf;');
        cell3.vertex = true;
        var cell4 = new mxCell('Execute', new mxGeometry(570, 0, 120, 60), 'html=1;points=[];perimeter=orthogonalPerimeter;layer=topic;fillColor=#dae8fc;strokeColor=#6c8ebf;');
	    	cell4.vertex = true;
	    	
        var edge1 = new mxCell('', new mxGeometry(0, 0, 0, 0), 'html=1;verticalAlign=bottom;endArrow=block;entryX=0;entryY=0.5;layer=topic;fillColor=#dae8fc;strokeColor=#6c8ebf;');
        edge1.geometry.setTerminalPoint(new mxPoint(-70, 30), true);
        edge1.geometry.setTerminalPoint(new mxPoint(0, 30), false);
        edge1.geometry.relative = true;
        edge1.edge = true;
        
        var edge2 = new mxCell('', new mxGeometry(0, 0, 0, 0), 'html=1;verticalAlign=bottom;endArrow=block;endSize=8;entryX=0;entryY=0.5;exitX=1;exitY=0.5;layer=topic;fillColor=#dae8fc;strokeColor=#6c8ebf;');
        edge2.geometry.setTerminalPoint(new mxPoint(120, 30), true);
        edge2.geometry.setTerminalPoint(new mxPoint(190, 30), false);
        edge2.geometry.relative = true;
        edge2.edge = true;

        var edge3 = new mxCell('', new mxGeometry(0, 0, 0, 0), 'html=1;verticalAlign=bottom;endArrow=block;endSize=8;entryX=0;entryY=0.5;exitX=1;exitY=0.5;layer=topic;fillColor=#dae8fc;strokeColor=#6c8ebf;');
        edge3.geometry.setTerminalPoint(new mxPoint(310, 30), true);
        edge3.geometry.setTerminalPoint(new mxPoint(380, 30), false);
        edge3.geometry.relative = true;
        edge3.edge = true;

        var edge4 = new mxCell('', new mxGeometry(0, 0, 0, 0), 'html=1;verticalAlign=bottom;endArrow=block;endSize=8;entryX=0;entryY=0.5;exitX=1;exitY=0.5;layer=topic;fillColor=#dae8fc;strokeColor=#6c8ebf;');
        edge4.geometry.setTerminalPoint(new mxPoint(500, 30), true);
        edge4.geometry.setTerminalPoint(new mxPoint(570, 30), false);
        edge4.geometry.relative = true;
        edge4.edge = true;

        var edge5 = new mxCell('', new mxGeometry(0, 0, 0, 0), 'html=1;verticalAlign=bottom;endArrow=block;endSize=8;exitX=1;exitY=0.5;layer=topic;fillColor=#dae8fc;strokeColor=#6c8ebf;');
        edge5.geometry.setTerminalPoint(new mxPoint(690, 30), true);
        edge5.geometry.setTerminalPoint(new mxPoint(780, 30), false);
        edge5.geometry.relative = true;
        edge5.edge = true;
        
        cell1.insertEdge(edge1, false);
        cell1.insertEdge(edge2, true);
        cell2.insertEdge(edge2, false);
        cell2.insertEdge(edge3, true);
        cell3.insertEdge(edge3, false);
        cell3.insertEdge(edge4, true);
        cell4.insertEdge(edge4, false);
        cell4.insertEdge(edge5, true);

			return sb.createVertexTemplateFromCells([cell1, cell2, cell3, cell4, edge1, edge2, edge3, edge4, edge5], 640, 60, 'Engineering Cycle');
		})
  ];
  this.addPaletteFunctions("D3Info", "D3Info", null != expand ? expand : true, fns);
};
/*****D3Info end*****/

/*****D3Phys start*****/
Sidebar.prototype.addD3PhysPalette = function (expand) {
  var sb = this;
  var fns = [
    this.createVertexTemplateEntry(
      "rounded=0;whiteSpace=wrap;html=1;layer=phys;fillColor=#d5e8d4;strokeColor=#82b366;",
      120,
      60,
      "",
      "Function",
      null,
      null,
      "rect rectangle box"
    ),
    this.createVertexTemplateEntry(
      "text;html=1;strokeColor=none;layer=phys;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;",
      40,
      20,
      "Text",
      "Text",
      null,
      null,
      "text textbox textarea label"
    ),

    this.addEntry(
      "line lines connector connectors connection connections arrow arrows edge title",
      mxUtils.bind(this, function () {
        var edge = new mxCell(
          "",
          new mxGeometry(0, 0, 0, 0),
          "endArrow=classic;html=1;class=Input/Output;layer=phys;fillColor=#d5e8d4;strokeColor=#82b366;"
        );
        edge.geometry.setTerminalPoint(new mxPoint(0, 0), true);
        edge.geometry.setTerminalPoint(new mxPoint(100, 0), false);
        edge.geometry.relative = true;
        edge.edge = true;
        var cell = new mxCell(
          "Input/Output",
          new mxGeometry(0, 0, 0, 0),
          "edgeLabel;resizable=0;html=1;align=center;verticalAlign=middle;"
        );
        cell.geometry.relative = true;
        cell.setConnectable(false);
        cell.vertex = true;
        edge.insert(cell);
        return this.createEdgeTemplateFromCells([edge], 100, 0, "Input/Output");
      })
    ),
    this.addEntry('uml relation', function () {
      var edge = new mxCell('Control', new mxGeometry(0, 0, 0, 0), 'endArrow=classic;endFill=1;html=1;edgeStyle=orthogonalEdgeStyle;align=center;verticalAlign=bottom;layer=phys;fillColor=#d5e8d4;strokeColor=#82b366;');
      edge.geometry.setTerminalPoint(new mxPoint(0, 0), true);
      edge.geometry.setTerminalPoint(new mxPoint(0, 50), false);
      edge.geometry.relative = true;
      edge.geometry.x = -1;
      edge.edge = true;

      var cell = new mxCell('Reason', new mxGeometry(-0.1, 0, 0, 0), 'edgeLabel;resizable=0;html=1;align=center;verticalAlign=middle;');
      cell.geometry.relative = true;
      cell.setConnectable(false);
      cell.vertex = true;
      edge.insert(cell);

      return sb.createEdgeTemplateFromCells([edge], 0, 50, 'Control');
    }),

    this.addEntry('uml relation', function () {
      var edge = new mxCell('Mechanism', new mxGeometry(0, 0, 0, 0), 'endArrow=classic;endFill=1;html=1;edgeStyle=orthogonalEdgeStyle;align=center;verticalAlign=middle;layer=phys;fillColor=#d5e8d4;strokeColor=#82b366;');
      edge.geometry.setTerminalPoint(new mxPoint(0, 0), true);
      edge.geometry.setTerminalPoint(new mxPoint(0, -50), false);
      edge.geometry.relative = true;
      edge.edge = true;

      return sb.createEdgeTemplateFromCells([edge], 0, 50, 'Control');
    }),
    this.createVertexTemplateEntry('swimlane;layer=phys;fillColor=#d5e8d4;strokeColor=#82b366;', 200, 200, 'Container', 'Container', null, null, 'container swimlane lane pool group'),
    this.addEntry('uml sequence invoke call delegation synchronous invocation activation', function()
		{
	    	var cell1 = new mxCell('Data Collect', new mxGeometry(0, 0, 120, 60), 'html=1;points=[];perimeter=orthogonalPerimeter;layer=topic;fillColor=#d5e8d4;strokeColor=#82b366;');
        cell1.vertex = true;
        var cell2 = new mxCell('Info Analyze', new mxGeometry(190, 0, 120, 60), 'html=1;points=[];perimeter=orthogonalPerimeter;layer=topic;fillColor=#d5e8d4;strokeColor=#82b366;');
        cell2.vertex = true;
        var cell3 = new mxCell('Decide', new mxGeometry(380, 0, 120, 60), 'html=1;points=[];perimeter=orthogonalPerimeter;layer=topic;fillColor=#d5e8d4;strokeColor=#82b366;');
        cell3.vertex = true;
        var cell4 = new mxCell('Execute', new mxGeometry(570, 0, 120, 60), 'html=1;points=[];perimeter=orthogonalPerimeter;layer=topic;fillColor=#d5e8d4;strokeColor=#82b366;');
	    	cell4.vertex = true;
	    	
        var edge1 = new mxCell('', new mxGeometry(0, 0, 0, 0), 'html=1;verticalAlign=bottom;endArrow=block;entryX=0;entryY=0.5;layer=topic;fillColor=#d5e8d4;strokeColor=#82b366;');
        edge1.geometry.setTerminalPoint(new mxPoint(-70, 30), true);
        edge1.geometry.setTerminalPoint(new mxPoint(0, 30), false);
        edge1.geometry.relative = true;
        edge1.edge = true;
        
        var edge2 = new mxCell('', new mxGeometry(0, 0, 0, 0), 'html=1;verticalAlign=bottom;endArrow=block;endSize=8;entryX=0;entryY=0.5;exitX=1;exitY=0.5;layer=topic;fillColor=#d5e8d4;strokeColor=#82b366;');
        edge2.geometry.setTerminalPoint(new mxPoint(120, 30), true);
        edge2.geometry.setTerminalPoint(new mxPoint(190, 30), false);
        edge2.geometry.relative = true;
        edge2.edge = true;

        var edge3 = new mxCell('', new mxGeometry(0, 0, 0, 0), 'html=1;verticalAlign=bottom;endArrow=block;endSize=8;entryX=0;entryY=0.5;exitX=1;exitY=0.5;layer=topic;fillColor=#d5e8d4;strokeColor=#82b366;');
        edge3.geometry.setTerminalPoint(new mxPoint(310, 30), true);
        edge3.geometry.setTerminalPoint(new mxPoint(380, 30), false);
        edge3.geometry.relative = true;
        edge3.edge = true;

        var edge4 = new mxCell('', new mxGeometry(0, 0, 0, 0), 'html=1;verticalAlign=bottom;endArrow=block;endSize=8;entryX=0;entryY=0.5;exitX=1;exitY=0.5;layer=topic;fillColor=#d5e8d4;strokeColor=#82b366;');
        edge4.geometry.setTerminalPoint(new mxPoint(500, 30), true);
        edge4.geometry.setTerminalPoint(new mxPoint(570, 30), false);
        edge4.geometry.relative = true;
        edge4.edge = true;

        var edge5 = new mxCell('', new mxGeometry(0, 0, 0, 0), 'html=1;verticalAlign=bottom;endArrow=block;endSize=8;exitX=1;exitY=0.5;layer=topic;fillColor=#d5e8d4;strokeColor=#82b366;');
        edge5.geometry.setTerminalPoint(new mxPoint(690, 30), true);
        edge5.geometry.setTerminalPoint(new mxPoint(780, 30), false);
        edge5.geometry.relative = true;
        edge5.edge = true;
        
        cell1.insertEdge(edge1, false);
        cell1.insertEdge(edge2, true);
        cell2.insertEdge(edge2, false);
        cell2.insertEdge(edge3, true);
        cell3.insertEdge(edge3, false);
        cell3.insertEdge(edge4, true);
        cell4.insertEdge(edge4, false);
        cell4.insertEdge(edge5, true);

      return sb.createVertexTemplateFromCells([cell1, cell2, cell3, cell4, edge1, edge2, edge3, edge4, edge5], 640, 60, 'Engineering Cycle');
    })
  ];
  this.addPaletteFunctions("D3Phys", "D3Phys", null != expand ? expand : true, fns);
};
/*****D3Phys end*****/
/*****sidebar setting for digital triplet end *****/

/*****setting for "compressXml:false" start*****/
var menusInit = Menus.prototype.init;
Menus.prototype.init = function () {
  menusInit.apply(this, arguments);
  var editorUi = this.editorUi;
  var graph = editorUi.editor.graph;

  editorUi.actions.put('exportXml', new Action(mxResources.get('formatXml') + '...', function () {
    var div = document.createElement('div');
    div.style.whiteSpace = 'nowrap';
    var noPages = editorUi.pages == null || editorUi.pages.length <= 1;

    var hd = document.createElement('h3');
    mxUtils.write(hd, mxResources.get('formatXml'));
    hd.style.cssText = 'width:100%;text-align:center;margin-top:0px;margin-bottom:4px';
    div.appendChild(hd);

    var selection = editorUi.addCheckbox(div, mxResources.get('selectionOnly'),
      false, graph.isSelectionEmpty());
    var compressed = editorUi.addCheckbox(div, mxResources.get('compressed'), false);
    var pages = editorUi.addCheckbox(div, mxResources.get('allPages'), !noPages, noPages);
    pages.style.marginBottom = '16px';

    mxEvent.addListener(selection, 'change', function () {
      if (selection.checked) {
        pages.setAttribute('disabled', 'disabled');
      }
      else {
        pages.removeAttribute('disabled');
      }
    });

    var dlg = new CustomDialog(editorUi, div, mxUtils.bind(this, function () {
      editorUi.downloadFile('xml', !compressed.checked, null,
        !selection.checked, noPages || !pages.checked);
    }), null, mxResources.get('export'));

    editorUi.showDialog(dlg.container, 300, 180, true, true);
  }));
  /*****setting for "compressXml:false" end*****/
}
