class PivotTableSourceFromTable {

      constructor(data) {
            this.data = data;
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
}

