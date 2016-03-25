<Query Kind="Program">
  <Reference Relative="..\..\..\Documents\Visual Studio 2015\Projects\HTMLDoc\HTMLDoc\bin\Debug\HTMLDoc.dll">&lt;MyDocuments&gt;\Visual Studio 2015\Projects\HTMLDoc\HTMLDoc\bin\Debug\HTMLDoc.dll</Reference>
  <NuGetReference>CsvHelper</NuGetReference>
  <NuGetReference>Newtonsoft.Json</NuGetReference>
  <Namespace>HTMLDoc</Namespace>
  <Namespace>Newtonsoft.Json</Namespace>
</Query>

public class SalesRecord {

	public DateTime OrderDate { get; set; }
	public string Region { get; set; }
	public string Rep { get; set; }
	public string Item { get; set; }
	public double Units { get; set; }
	public double UnitCost { get; set; }
	public double Total { get; set; }

}

public class PersonRecord {
	public string Name {get;set;}
	public double Age {get;set;}
}

void Main()
{
	Directory.SetCurrentDirectory(@"c:\Users\joel\Dropbox\Programming\HTML");
	
	var jsdoc = new JSDoc();
	
	var csvFile = @"sample data\sampledata.csv";
	var reader = new StreamReader(csvFile);

	var csv = new CsvHelper.CsvReader(reader);
	csv.Configuration.AutoMap<SalesRecord>();
	var headers = typeof(SalesRecord).GetProperties().Select(p => p.Name);
	var records = csv.GetRecords<SalesRecord>().ToList();
	
	var htmldoc = new HTMLDoc.HTMLDoc();
	htmldoc.AddCSSLink("bootstrap/css/bootstrap.css");
	htmldoc.AddCSSLink("bootstrap/css/bootstrap-responsive.css");
	htmldoc.AddJSLink("bootstrap/js/jquery.js");
	htmldoc.AddJSLink("bootstrap/js/bootstrap.js");
	// 
	htmldoc.AddJSLink("htmldoc_utils.js");
	htmldoc.StartBody();	
	htmldoc.AddToBody("<H1>Table</H1>");
	htmldoc.AddTable<SalesRecord>(headers,records.Take(5));
	
	var persons = new List<PersonRecord>() {
		new PersonRecord { Name = "Bob", Age = 54 },
		new PersonRecord { Name = "Mitch", Age = 34 }		
	};
	
	htmldoc.AddToBody("And here goes another table");
	htmldoc.AddTable<PersonRecord>(new[] { "Name", "Age" }, persons );
	
	
	htmldoc.AddToBody(string.Format("Created at {0}",DateTime.Now.ToString()));

	var fileName = "htmlDoc.html";
	htmldoc.Write(fileName);
	Process.Start(fileName);
}

// Define other methods and classes here