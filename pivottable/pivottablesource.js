class PivotTableSourceFromTable {

      constructor(data, dimensions, metrics) {
            this.data = data;
            this.dimensions = dimensions;
            this.metrics = metrics;
      }

      // returns a list of rows where each row has key = is one possible value for 'nextPivot', 
      // and all the aggregated valueFields
      drilldown(filter, nextPivot, valueFields) {
            // get all the filtered data, grouped by nextPivot
            var groupedData = this.data
                  .where(filter)
                  .groupBy(FieldExtractor(nextPivot));
            // for each group, summarize the results
            var returnValue = _.map(groupedData, function(values,key) {
                  var summary = valueFields
                        .toObject(function(field) { return values.sum(FieldExtractor(field)); });
                  summary.key = key;
                  return summary;
            });
            return returnValue;
      }

      // returns the list of possible values for a dimension, optionally, with a filter
      distinctValues(dimension, filter = {}) {
            var groupBy = this.data
                  .where(filter)
                  .groupBy(FieldExtractor(dimension));
            return _.map(groupBy, function(values,key) { return key; });
      }
}

