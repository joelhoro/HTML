class PivotTable {
      constructor(table,source,pivots,valueFields,classes) {
            this.table = table;
            this.source = source;
            this.nodesDictionary = [{level:0, filter: {}, open: false}];
            this.valueFields = valueFields;
            this.pivots = pivots;
            this.id = 0;
            var template = _.template(`
            <tr onclick='pivotTable.queryNode(<%= newid %>)' 
                  data-tt-id='<%= newid %>' data-tt-parent-id='<%= parentid %>' >
                  <td>
                        <span class=<%= classes[pivotLevel] %>><%= key %></span>
                  </td>
                  <%= values %>
            </tr>`);
            this.rowTemplate = function(obj) {
                  obj.classes = classes;
                  obj.pivots = pivots;
                  return template(obj);
            }
      }

      initialize() {

            // create the table
            this.table.treetable({ expandable: true }).treetable("expandAll");
            // create the column names based on the fields
            var firstColumName = this.pivots.join(" &gt;&gt; ");
            var columns = [ firstColumName ].concat(this.valueFields);
            this.table
                  .find("thead")
                  .append(columns.map(HTMLWrapper("th")));

            // create the root node
            var values = this.valueFields
                  .map(function() { return ""; })
                  .map(HTMLWrapper("td"))
                  .join("\n");
            var root = 
            { 
                  parentid: -1, 
                  newid : 0, 
                  key: "Sales database", 
                  value: "", 
                  pivotLevel: 0, 
                  values: values,
            };
            this.table.treetable("loadBranch",null,this.rowTemplate(root));

            // open the root node
            this.queryNode(0);

      }
      
      addNode(baseNode,obj,currentField,pivotLevel) { 
            var parentid;
            if(baseNode == null)
                  parentid = 0;
            else
                  parentid = baseNode.id;
            this.id++;
            var id = this.id;
            this.nodesDictionary[id] = {level: pivotLevel, open: false};
            this.nodesDictionary[id].filter = _.clone(this.nodesDictionary[parentid].filter)
            this.nodesDictionary[id].filter[currentField]=obj.key;

            var values = this
                  .valueFields
                  .map(ObjectFn(obj))
                  .map(HTMLWrapper("td"))
                  .join("\n");
            var newNode = this.rowTemplate({ parentid: parentid, newid : id, key: obj.key, 
                  pivotLevel: pivotLevel, values: values } );
            
            this.table.treetable("loadBranch", baseNode, newNode );
      }

      // query node id
      queryNode(id) {
                  var node = this.table.treetable("node",id);
                  var nodeInfo = this.nodesDictionary[id];
                  // if this node has already been opened, just toggle it
                  if (nodeInfo.opened) {
                        node.toggle();
                        return;
                  }
                  nodeInfo.opened = true;
                  var filter = nodeInfo.filter;
                  var pivotLevel = nodeInfo.level;
                  var nextPivot = this.pivots[pivotLevel];
                  var newData = this.source.drilldown(filter, nextPivot, this.valueFields);

                  var thisCopy = this;
                  newData.map(function(row) {
                         thisCopy.addNode(node, row, nextPivot, pivotLevel+1 );
                  })
      }

}
