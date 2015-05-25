<Query Kind="Program">
  <NuGetReference>Newtonsoft.Json</NuGetReference>
  <Namespace>Newtonsoft.Json</Namespace>
</Query>

public class JSDoc {

	public string code = "";
	
	public string Contents() {
		return code;
	}
	public string Write(string fileName= "") {
		if(fileName=="")
			fileName = Path.GetRandomFileName() + ".js";
			
		File.WriteAllText(fileName,Contents());
		return fileName;
	}
	
	public void AddTable(IEnumerable<string> headers, IEnumerable<IEnumerable<object>> rows, int tableCount) {
		code += string.Format( @"
		var table{2} = function() {{
			var headers = {0};
			var data = {1};
			return {{ headers: headers, data: data, link : '#mytable{2}' }};
		}}();
		", JsonConvert.SerializeObject(headers), JsonConvert.SerializeObject(rows), tableCount );
	}
	
}


public class HTMLDoc {

	private List<string> _jsLinks = new List<string>();
	private List<string> _cssLinks = new List<string>();

	private string body = ""; 

	private static string JSLink(string link) {
		return string.Format("\t<script src='{0}'></script>\n", link );
	}
	
	private static string CSSLink(string link ) {
		return string.Format("\t<link href='{0}' rel='stylesheet'>\n",link);
	}

	
	private string JSInitialization() {
		var jsbody = initializationJs;
		for(int i = 0; i < tableCount; i++ ) {
			jsbody += string.Format("\tDataToTable(table{0}.headers,table{0}.data,table{0}.link);\n",i);
		}
		var initialization = String.Format( @"
	<script>
	// initialization
	$(document).ready( function() {{
		{0}	}} );
	</script>
		", jsbody);
		return initialization;
	}
	
	private string initializationJs = "";

	public void AddJSLink(string link) { _jsLinks.Add(link); }
	public void AddCSSLink(string link) { _cssLinks.Add(link); }
	public void AddToJSInitialization(string code) { initializationJs += code + "\n"; }
	public void AddToBody(string html) { body += html + "\n"; }

	private JSDoc jsDoc = new JSDoc();

	private int tableCount = 0;
	public void AddTable(IEnumerable<string> headers, IEnumerable<IEnumerable<object>> rows) {
		jsDoc.AddTable(headers, rows, tableCount);
		body += string.Format( @"
			<table id=mytable{0} class='table bootstrap-table table-striped table-hover'>
				<thead></thead><tbody></tbody>
			</table>
		", tableCount++);

	}

	public string Contents() {
		var contents = "<html>\n<head>\n";
		foreach(var link in _cssLinks) { contents += CSSLink(link); }
		
		contents += "</head>\n\n";
		contents += "<body>\n" + body + "</body>\n";
		
		foreach(var link in _jsLinks) { contents += JSLink(link); }
		var jsFileName = jsDoc.Write("attachedData.js");
		contents += JSLink(jsFileName);
		
		contents += JSInitialization();
		
		return contents;
	}

	public string Write(string fileName = "") {
		if(fileName=="")
			fileName = Path.GetRandomFileName() + ".html";
		File.WriteAllText(fileName,Contents());
		return fileName;
	}
}


void Main()
{
	Directory.SetCurrentDirectory(@"c:\Users\joel\Dropbox\Programming\HTML");
	
	var jsdoc = new JSDoc();
	var headers = new List<string>() { "AAA", "BBB", "CCC" };
	var table = new List<List<object>>() {
		new List<object>() { "XXX", 123, 5.4 },
		new List<object>() { "YuY", 54, 63 },
		new List<object>() { "YuY", DateTime.Now, 63 }
	};
	
	
	var htmldoc = new HTMLDoc();
	htmldoc.AddCSSLink("bootstrap/css/bootstrap.css");
	htmldoc.AddCSSLink("bootstrap/css/bootstrap-responsive.css");
	htmldoc.AddJSLink("bootstrap/js/jquery.js");
	htmldoc.AddJSLink("bootstrap/js/bootstrap.min.js");
	// 
	htmldoc.AddJSLink("utils.js");
		
	htmldoc.AddToBody("<H1>Table</H1>");
	htmldoc.AddTable(headers,table);
	htmldoc.AddToBody("<H1>Second table</H1>");
	
	table.Add(new List<object>() { "YuY", DateTime.Now, 63 });
	//htmldoc.AddTable(headers,table);
	htmldoc.AddToBody(string.Format("Created at {0}",DateTime.Now.ToString()));

	//htmldoc.AddToJSInitialization(code);	
	//htmldoc.Contents().Dump("Contents");
	htmldoc.Write("test2.html");
	
	Process.Start("test2.html");
}

// Define other methods and classes here