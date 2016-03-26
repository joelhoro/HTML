class PivotTableSourceFromTable {

      constructor(data) {
            this.data = data;
      }


      drilldown(filter, nextPivot, valueFields) {
            var filteredData = this.data.where(filter);
            
            var groupedData = filteredData.groupBy(FieldExtractor(nextPivot));
            var returnValue = _.map(groupedData, function(values,key) {
                  var summary = valueFields
                        .toObject(function(field) { return values.sum(FieldExtractor(field)); });
                  summary.key = key;
                  return summary;
            });
            return returnValue;
      }
}
