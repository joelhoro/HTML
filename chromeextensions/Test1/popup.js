document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function() {

  deleteResult = function(r) { 
    console.log(r.url); 
    //chrome.history.deleteUrl({url: r.url}) 
  };

      query = { text: "", startTime: 1 };
      chrome.history.search(query, function(results) { 
        results.forEach(deleteResult) 
      } );
}, false);
} );