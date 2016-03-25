
function Brownian(startDate, dx, points) {
    var data= [];
    var x = startDate;
    var y = 0;
    var dy = Math.sqrt(dx);
    
    for (var i = 0; i < points; i++) {
        x = x.AddDays(dx);
        y += (Math.random()<0.5)?dy:-dy;
        data.push([x,y]);
    }

    return data;
}


function X() {
                var movingAvg= []
    var window = 50;
    for (var i = 0; i < points; i++) {
        if((i>window/2) & (i<points-window/2-1)) {
            var avg = 0;
            for(var j=0;j<window;j++) {
                avg += data[i-j+window/2][1];
            }
            movingAvg.push([data[i][0],avg/window]);
        }
    };

}


function GetData(size) {
    var names = [
    	"Bob","John", "Morris", "Frank", "Hillary","Linda", "Marc","Tom", "William",
    	"Suzan", "Patricia", "Olivia", "Julie", "Emily", "Chloe", "Anais", "Sophie", "Joel",
    	"Hank", "Octave", "Michael", "Eva", "Hector"
    ];
    var familynames = [
    	"Smith", "Johnson", "Hanks", "Blum", "Reagan", "Roberts", "Simons", "Jacobs",
    	"Lawson", "Patterson", "Vaughn", "Love", "Bradley", "Gibbs", "Moss", "Blunt", "Morse",
    	"Cruise", "Morris", "Milford","DeNiro", "Paulson", "Blankfein"

    ];
    var jobs = [
    	"Banker", "Hairdresser", "Teacher", "Astronaut","Gardener", "Philospher", "Writer", "Programmer", "Quant", "Salesperson", "Doctor",
		"Accountant", "Actuary", "Agriculturist", "Architect", "Economist", "Engineer", "Interpreter", "Lawyer", 
		"Advocate", "Solicitor", "Librarian", "Statistician", "Surveyor", "Urban planner"
    ];

    var data = [];

    for (var i = 0; i < size; i++) {
    	var row = [];
    	row[0] = names.pickrandom();
    	row[1] = familynames.pickrandom();
    	row[2] = jobs.pickrandom();
    	row[3] = 20 + Math.floor(Math.random()*30);
    	data[i] = row;
    }
    return data;
}

