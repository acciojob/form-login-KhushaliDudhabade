function getFormvalue() {
    
    var form = document.getElementById("form1");

// Get the values of the first and last name fields
var firstName = form.elements["fname"].value;
var lastName = form.elements["lname"].value;
var submitBtn=document.getElementById("submit");

	// function myFunction(){
	// 	// alert(first_name+" "+last_name);
	// 	alert("successfully subimited");
	// }
    
     
     alert(first_name+" "+last_name);
 
}