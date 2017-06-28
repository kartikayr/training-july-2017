function checkphone(evt){
      var charCode = (evt.which) ? evt.which : event.keyCode

       if (charCode == 45 || (charCode >= 48 && charCode <= 57))
          return true;
      else{
          alert("Number Only!");
        return false;
      }
 }
 function formatphone(){
   var phone=document.getElementById("number");
  phone = phone.replace(/[^\d]/g, '');
  phone = phone.substring(0,3)+'-'+phone.substring(3,6)+'-'+phone.substring(6, 10);
}
 function checkip(evt){
       var charCode = (evt.which) ? evt.which : event.keyCode

        if (charCode == 46 || (charCode >= 48 && charCode <= 57))
           return true;
        else{
          alert("Number Only!");
        return false;
      }
  }
