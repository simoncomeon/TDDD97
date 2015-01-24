displayView = function() {
  
}

window.onload=function(){

	//ask for status 
	/*if status = loged in
	*	show welcome view 
	* if status != loged in 
	*	show login view 
	*
	*/

	var sbutton = document.getElementById("signup");
	sbutton.onclick = new_member;
//	alert("Button clicked");

	//if status is not loged in
	var lbutton = document.getElementById("login");
	lbutton.onclick = already_member; 
//	alert("already member  clicked");
}


function already_member(){
	var email = document.getElementById("email").value;
	var pass_w = document.getElementById("password").value;
	var token = serverstub.signIn(email, pass_w);
	if(token.success == true){
	 alert(token.message);	
	 document.view.getElementById("profileView");
	 //displayView.getElementById("profileView");
	}
	else{
		alert (token.message);
	}
}


function new_member(){

	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	var firstname = document.getElementById("fName").value;
	var familyname = document.getElementById("sName").value;
	var gender = document.getElementById("gender").value;
	var city = document.getElementById("city").value;
	var country = document.getElementById("country").value;
	var passw1 = document.getElementById("psword1").value;
	var passw2 = document.getElementById("psword2").value;	
	var dataObject = {"email":email, 
					  "password": password, 
					  "firstname":firstname , 
					  "familyname":familyname, 
					  "gender": gender,
					  "city":city, 
					  "country":country}; // {email, password, firstname, familyname, gender, city, country}
	if(passw1 != passw2){
		alert("Wrong confirmed passowrd");
	}
	else{
		var resp= serverstub.signUp(dataObject);
		alert(resp.message);
		alert(resp.data);

	}
}




