"use strict";

angular.module('wordGame',[])
.factory('wordGameClasses', function() {
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

    return { Cell: Cell, Grid: Grid };
  })
.service('testing', function(wordGameClasses) {
    // TESTING

    var Cell = wordGameClasses.Cell;

    function CreateDummyGrid() {
      var g = new wordGameClasses.Grid();
      var grid = g.grid;
      grid[2][0].value = "P";
      grid[2][1].value = "R";
      grid[2][2].value = "A";
      grid[2][3].value = "N";
      grid[2][4].value = "K";
      grid[3][2].value = "T";
      grid[3][1].value = "O";
      grid[1][1].value = "D";
      grid[1][3].value = "T";
      grid[3][4].value = "S";
      return g;
    }


    function Assert(assertion, message) {
      console.assert(assertion,message);
      if(assertion)
         console.debug("[PASSED TEST] " + message);
    }

    function AssertAreEqual(a,b, message) {
      var assertion = JSON.stringify(a) === JSON.stringify(b);
      Assert(assertion,message);
    }

    function Runtests(grid) {

      console.group("Testing neighbors")

      var c1 = new Cell(2,3);
      var c2 = new Cell(2,4);
      var c3 = new Cell(2,6);
      Assert(c1.IsNeighbor(c2), "Testing 2 neighbors");
      Assert(!c1.IsNeighbor(c3), "Testing 2 non neighbors");

      var neighbors = grid.neighbors(c1).map(c => [c.row,c.column]);
      var expectedNeighbors = [[1,3],[2,2],[2,4],[3,3]];
      AssertAreEqual(expectedNeighbors, neighbors, "Neigbors of some point");

      var neighbors = grid.neighbors(new Cell(0,0)).map(c => [c.row,c.column]);
      var expectedNeighbors = [[0,1],[1,0]];
      AssertAreEqual(expectedNeighbors, neighbors, "Neigbors of a corner");

      console.groupEnd();
    }

    return { Runtests: Runtests, CreateDummyGrid: CreateDummyGrid }
  }
    )
.controller('wordGameCtrl', function($scope, wordGameClasses, testing) {

  var Cell = wordGameClasses.Cell;
  var Grid = wordGameClasses.Grid;

  
  $scope.selectCell = function(cell) {
    console.debug("Selecting ", cell);
    if(!cell.available) {
      console.debug("Unavailable - skipping");
      return;
    }
    $scope.path.push(cell);
    $scope.g.refreshAvailability($scope.path);
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
    $scope.g.refreshAvailability($scope.path)
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


  $scope.g = testing.CreateDummyGrid();

  $scope.resetPath();


  $scope.selectedLetter = "";


  testing.Runtests($scope.g);
  
});