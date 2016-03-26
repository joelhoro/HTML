class PivotTable {
      constructor(table,source,pivots,valueFields) {
            this.table = table;
            this.source = source;
            this.nodesDictionary = [{}];
            this.openNodes = {};
            this.valueFields = valueFields;
            this.pivots = pivots;
            this.id = 0;
            this.initialize();
      }

      initialize() {
            this.rowTemplate = _.template("<tr onclick='treeModel.query(<%= newid %>,<%= pivotLevel %>)' data-tt-id='<%= newid %>' data-tt-parent-id='<%= parentid %>' ><td><span class=folder><%= key %></span></td><%= values %></tr>");

            this.table.treetable({ expandable: true }).treetable("expandAll");

      }
      
      addNode(baseNode,obj,currentField,pivotLevel) { 
            var parentid;
            if(baseNode == null)
                  parentid = 0;
            else
                  parentid = baseNode.id;
            this.id++;
            var id = this.id;
            this.nodesDictionary[id] = _.clone(this.nodesDictionary[parentid])
            this.nodesDictionary[id][currentField]=obj.key;

            var values = this
                  .valueFields
                  .map(ObjectFn(obj))
                  .map(HTMLWrapper("td"))
                  .join("\n");
            var newNode = this.rowTemplate({ parentid: parentid, newid : id, key: obj.key, 
                  pivotLevel: pivotLevel, pivots: this.pivots, values: values } );
            
            this.table.treetable("loadBranch", baseNode, newNode );
      }

      query(id, pivotLevel) {
                  var node = this.table.treetable("node",id);
                  if (this.openNodes[id] != undefined) {
                        node.toggle();
                        return;
                  }
                  this.openNodes[id] = 1;
                  var filter = this.nodesDictionary[id];
                  var nextPivot = this.pivots[pivotLevel];
                  var newData = this.source.drilldown(filter, nextPivot,this.valueFields);

                  var thiscopy = this;
                  newData.map(function(row) {
                         thiscopy.addNode(node, row, nextPivot, pivotLevel+1 );
                  })
      }

}
