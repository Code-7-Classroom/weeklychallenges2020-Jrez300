function validation(){
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var pnumber = document.getElementById("pnumber").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var error = document.getElementById("error");
    var text;

    error.style.padding="10px";
    
    if(fname.length <3) {
        text = "Please Enter Valid First Name";
        error.innerHTML = text;
        return false;
    }
   

    if(lname.length <3) {
    text = "Please Enter Valid Last Name";
    error.innerHTML = text;
    return false;
    }

    if(isNaN(pnumber) || pnumber.length !=10) {
        text = "Please Enter Valid Phone Number";
        error.innerHTML = text;
        return false;
    }

    if(email.indexOf("@") == -1 || email.length < 6) {
        text = "Please Enter Valid Email Address";
        error.innerHTML = text;
        return false;
    } 
        
     if(subject.length <= 30) {
          text = "Please Enter More Than 30 Characters ";
         error.innerHTML = text;
          return false;
     }

       alert("Form Submitted Successfully!")
       return false;
}

