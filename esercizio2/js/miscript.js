function tabelline(numero)
{
	document.write("<ul id='tabla'>");
	for(i=1;i<=10;i++){
		
			document.write("<li>"+numero+"*"+i+"="+(i*numero)+"</li>");
 }
 document.write("</ul>");
 }
 
 
 function tabelline(inicio,fine)
{
	for(j=inicio;j<=fine;j++){
		document.write("<ul>");
		for (i=1;i<=10;i++){
			document.write("<li>"+j+"*"+i+"="+(i*j)+"</li>");
 }
 document.write("</ul>");
 }
	
}