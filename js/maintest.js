function validateForm() {
  var name = document.forms["myForm"]["name"].value;
  var lastname = document.forms["myForm"]["lastname"].value;
  var number=document.forms["myForm"]["num"].value;
  var email = document.forms["myForm"]["email"].value;
  var city = document.forms["myForm"]["city"].value;
  var category = document.forms["myForm"]["category"].value;
  
  var nameRegex = /^[a-zA-Z]{2,15}$/;
  var lastnameRegex = /^[a-zA-Z]{2,15}$/;
   // check name
  if (name == "") {
    document.getElementById("nameError").innerHTML = "Le nom doit être rempli";
    return false;
  } else if (!nameRegex.test(name)) {
    document.getElementById("nameError").innerHTML = "Le nom doit contenir uniquement des lettres alphabétiques et être compris entre 2 et 15 caractères de longueur";
    return false;
  } else {
    document.getElementById("nameError").innerHTML = "";
  }
  // check lastname
  if (lastname == "") {
    document.getElementById("lastnameError").innerHTML = "Le nom de famille doit être renseigné";
    return false;
  } else if (!lastnameRegex.test(lastname)) {
    document.getElementById("lastnameError").innerHTML = "Le nom de famille ne doit contenir que des lettres alphabétiques et comporter entre 2 et 15 caractères";
    return false;
  } else {
    document.getElementById("lastnameError").innerHTML = "";
  }
  // check number
  if(number ==""){
    document.getElementById("numErorr").innerHTML ="le numéro de téléphone doit être rempli";
  }
 // else if(!numberRegex(number)){
   // document.getElementById("numErorr").innerHTML ="le numéro de téléphone ne doit contenir que des chiffre numérique";  
  //}
  else{
    document.getElementById("numError").innerHTML = "";  
  }
  // check email
  if (email == "") {
    document.getElementById("emailError").innerHTML = "L'e-mail doit être renseigné";
    return false;
  } else {
    document.getElementById("emailError").innerHTML = "";
  }
  
  // check city
  if (city == "") {
    document.getElementById("cityError").innerHTML = "La ville doit être sélectionnée";
    return false;
  } else {
    document.getElementById("cityError").innerHTML = "";
  }
   // check city 
  if (category == "") {
    document.getElementById("categoryError").innerHTML = "La catégorie doit être sélectionnée";
    return false;
  } else {
    document.getElementById("categoryError").innerHTML = "";
  }
}

