angular.module('myApp',[])
  .controller('myCtrl', function($scope) {

  class Cell {
    constructor(row,column,value) {
      this.row = row;
      this.column = column;
      this.value = value;
      
      this.IsNeighbor = function(otherCell) {
        return Math.abs(otherCell.row-this.row) + Math.abs(otherCell.column-this.column) == 1
      }

      this.IsEmpty = function() { return this.value == ""; }
      this.HasSuggestedValue = function() { return this.suggestedValue != ""; }
      this.Reset = function() { this.suggestedValue = ""; }
      this.suggestedValue = value;
      this.CurrentValue = function() { return this.value || this.suggestedValue; }
    }
  }
  
  class Grid {
    constructor() {
      var size = 5;
      this.cells = [];
      this.grid = [];
      for(var i = 0; i < size; i++) {
        var line = []
        for(var j = 0; j < size; j++) {
          var cells = new Cell(i,j,"");
          this.cells.push(cells);          
          line.push(cells);
        }
        this.grid.push(line)
      }
      
      this.neighbors = function(cell) {
        return this.cells.filter(c => cell.IsNeighbor(c));
      }
      
      this.refreshAvailability = function(path) {

        var hasEmptyCell = path.filter(c => c.IsEmpty()).length >0;

        this.cells.map(c => {
          if(path.length == 0)
            c.available = this.neighbors(c).filter(otherCell => otherCell.value !== "").length > 0;
          else 
            c.available = path[path.length-1].IsNeighbor(c) && (!c.IsEmpty() || !hasEmptyCell);
          
          c.selected = path.indexOf(c)>-1;
          c.available = c.available && !c.selected;
        })
      }
      
      
    }
  }
  
  var g = new Grid();
  var grid = g.grid;
  $scope.g = g;
  $scope.g.grid[2][0].value = "P";
  $scope.g.grid[2][1].value = "R";
  $scope.g.grid[2][2].value = "A";
  $scope.g.grid[2][3].value = "N";
  $scope.g.grid[2][4].value = "K";
  $scope.g.grid[3][2].value = "T";
  $scope.g.grid[3][1].value = "O";
  $scope.g.grid[1][1].value = "D";
  $scope.g.grid[1][3].value = "T";
  $scope.g.grid[3][4].value = "S";

  $scope.selectCell = function(cell) {
    console.debug("Selecting ", cell);
    if(!cell.available) {
      console.debug("Unavailable - skipping");
      return;
    }
    $scope.path.push(cell);
    g.refreshAvailability($scope.path);
    if(cell.IsEmpty())
      $scope.editCell = cell;
  }

  $scope.selectLetter = function(letter) {
    if($scope.selectedLetter == "")
      $scope.editCell.suggestedValue = letter;
  }

  $scope.toggleCommit = function(letter) {
    if($scope.selectedLetter == letter)
      $scope.selectedLetter = "";
    else {
      $scope.selectedLetter = letter;
      $scope.selectLetter(letter)
    }
  }
  
  $scope.resetPath = function() {
    $scope.path = [];
    $scope.editCell.Reset();
    $scope.editCell = new Cell();
    g.refreshAvailability($scope.path)
  }


  $scope.selectedWord = function() {
    return $scope.path.map(c => c.CurrentValue() || "?" ).join("-");
  }

  var EmptyCells = () => $scope.path.filter(c => c.IsEmpty());

  $scope.pathIsComplete = function() {
    var emptyCells = EmptyCells();
    return emptyCells.length == 1 && emptyCells[0].HasSuggestedValue();
  }

  $scope.showAlphabet = function() {
    var emptyCells = EmptyCells();
    return emptyCells.length == 1;
  }

  $scope.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var i = 0;
  $scope.rotations = $scope.alphabet.map(x => Math.sin(i++ * Math.PI /2)  * 20);
  $scope.editCell = new Cell();

  $scope.resetPath();


  $scope.selectedLetter = "";

  // TESTING
  function Assert(assertion, message) {
    if(!assertion) {
      throw "FAILED: " + message
    }
    else
      console.debug("PASSED: " + message);
  }

  function testing() {

    var c1 = new Cell(2,3);
    var c2 = new Cell(2,4);
    var c3 = new Cell(2,6);
    Assert(c1.IsNeighbor(c2), "Testing neighbors");
    Assert(!c1.IsNeighbor(c3), "Testing non neighbors");

  }


  testing();
  
});