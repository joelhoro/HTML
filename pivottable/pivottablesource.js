angular
.module('pivotTableService',['utilsService'])
.service('PivotTableSourceFromTable', function(utils,_) {

      class PivotTableSourceFromTable {

            constructor(data, dimensions, metrics) {
                  console.log("Creating source from %s records, with dimensions=%o and metrics=%o", data.length, dimensions, metrics);
                  this.data = data;
                  this.dimensions = dimensions;
                  this.metrics = metrics;
            }

            // returns a list of rows where each row has key = is one possible value for 'nextPivot', 
            // and all the aggregated valueFields
            drilldown(filter, nextPivot, valueFields) {
                  console.log("Drilling down %s, filter=%s => metrics=%o", nextPivot, JSON.stringify(filter), valueFields);
                  // get all the filtered data, grouped by nextPivot
                  var groupedData = this.data
                        .where(filter)
                        .groupBy(utils.FieldExtractor(nextPivot));
                  var keys = _.keys(groupedData);
                  console.log("Found %s groups: %o", keys.length, keys );
                  // for each group, summarize the results
                  var returnValue = _.map(groupedData, function(values,key) {
                        var summary = valueFields
                              .toObject(function(field) { return values.sum(utils.FieldExtractor(field)); });
                        summary.key = key;
                        return summary;
                  });
                  return returnValue;
            }

            // returns the list of possible values for a dimension, optionally, with a filter
            distinctValues(dimension, filter = {}) {
                  var groupBy = this.data
                        .where(filter)
                        .groupBy(utils.FieldExtractor(dimension));
                  return _.map(groupBy, function(values,key) { return key; });
            }
      }

      return PivotTableSourceFromTable;      

} ); // factory('PivotTableSourceFromTable', function(utils) ...
