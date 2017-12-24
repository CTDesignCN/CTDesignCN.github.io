function loadXMLDoc(file) 
{
try //Internet Explorer  
{  
 xmlDoc=new ActiveXObject("Microsoft.XMLDOM");  
 xmlDoc.async=false;  
 xmlDoc.load(file);  
}  
catch(e)  
{  
 try //Firefox, Mozilla, Opera, etc.  
 {  
  xmlDoc=document.implementation.createDocument("","",null);  
  xmlDoc.async=false;  
  xmlDoc.load(file);  
 }  
 catch(e)  
 {  
  try //Google Chrome  
  {  
   var xmlhttp = new window.XMLHttpRequest();  
   xmlhttp.open("GET",file,false);  
   xmlhttp.send(null);  
   xmlDoc = xmlhttp.responseXML.documentElement;  
  }  
  catch(e)  
  {  
   error=e.message;  
  }  
 }  
}
}