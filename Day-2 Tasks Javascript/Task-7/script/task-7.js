class Validate {
 validateLength(name) {
   let len=name.length;
   if (len>20) {
     document.getElementById("name").focus();
     window.alert("max length for name is 20 char.");
     return false;
     }
     else {
       return true;
     }
   }
   validateEmail(email) {
     var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
     if(mailformat.test(email))
     {
       return true;
     }
     else
     {
       document.getElementById("email").focus();
       window.alert("You have entered an invalid email address!");
       return false;
     }
   }
   validatenumber(no) {
     var phoneno = /^\d{10}$/;
     if (phoneno.test(no))
     {
     return true;
       }
     else
       {
         document.getElementById("email").focus();
         window.alert("enter a valid 10 digit phone no");
         return false;
       }
     }
   }


function myfunction() {
   let name= document.getElementById("name").value;
   let email= document.getElementById("email").value;
   let no= document.getElementById("no").value;
   const obj = new Validate();
 if ( obj.validateLength(name) && obj.validateEmail(email) && obj.validatenumber(no)) {
   document.getElementById("para").innerHTML="Form validation successful";
 }
}
