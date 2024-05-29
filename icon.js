let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);


let firstname = id("firstName"),
 lastname = id("lastname"),
  email = id("email"),
  
  form = id("form"),
  
  errorMsg = classes("error"),
  
  failureIcon = classes("error-icon");
  successIcon = classes("success-icon");


  form.addEventListener('submit', (e) => {
  e.preventDefault();
 let engine = (id, serial, message) => {

   if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid red";
    
    // icons
    failureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";
  } 
  
  else {
    errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid green";
    
    // icons
    failureIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "1";
  }
}
 engine(firstname, 0, "First Name cannot be blank");
  engine(lastname, 1, "Last Name cannot be blank");
  engine(email, 2, "email cannot be blank");
  engine(password,3, "Password cannot be blank");
});