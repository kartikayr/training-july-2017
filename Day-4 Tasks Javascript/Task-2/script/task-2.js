var formData = [
  {"type":"text","name":"fName","label":"First Name","validate":{"minLength":6,"maxLength":15,"allow":"alphabet"}},
  {"type":"text","name":"lName","label":"Last Name","validate":{"minLength":6,"maxLength":15,"allow":"alphabet"}},
  {"type":"text","name":"phone","label":"Phone Number","validate":{"length":10,"allow":"number"}},
  {"type":"textarea","name":"about","label":"About","validate":{"minLength":6,"maxLength":150,"allow":"any"}},
  {"type":"text","name":"email","label":"Email","validate":{"allow":"email"}},
  {"type":"password","name":"password","label":"Password","validate":{"minLength":6,"maxLength":10,"allow":"any"}}
]
class create{
  constructor(){}
  isEmail(evt,id) {
   let charCode = document.getElementById(id).value;
   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(charCode)){
     return true;
   }
   else {
     alert("enter valid email id");
     return false;
   }
  }
  length(id,l){
    let string=document.getElementById(id).value;
    let len=string.length;
    if(len!=l)
      alert(`Enter ${l} digits only!`);

  }
  isNumber(evt) {
        var iKeyCode = (evt.which) ? evt.which : evt.keyCode
        if (iKeyCode != 46 && iKeyCode > 31 && (iKeyCode < 48 || iKeyCode > 57))
            return false;

        return true;
  }
  isAlphabet(evt)
  {
            var charCode = (evt.which) ? evt.which : evt.keyCode
            if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode == 8)
                return true;
            else
                return false;
  }
  form(){
    var form = document.getElementById("myform").parentNode;
    formData.forEach(item => {
      var input = document.createElement("input");
      input.id=item.name;
      if(item.label){
        var x=document.createElement("LABEL");
        var t=document.createTextNode(item.label+" : ");
        x.setAttribute("for", input.id);
        x.appendChild(t);
        form.appendChild(x);
      }
      if(item.type)
        input.type=item.type;
      if(item.name)
        input.name=item.name;
      if(item.validate.length){
        input.setAttribute("onblur", `return obj.length("${input.id}","${item.validate.length}")`);
      }
      if(item.validate.minLength)
        input.minLength=item.validate.minLength;
      if(item.validate.maxLength)
        input.maxLength=item.validate.maxLength;
      if(item.validate.allow){
        if(item.validate.allow=="alphabet")
          input.setAttribute("onkeypress", "return obj.isAlphabet(event)");
        if(item.validate.allow=="number")
          input.setAttribute("onkeypress", "return obj.isNumber(event)");
        if(item.validate.allow=="email")
          input.setAttribute("onblur", `return obj.isEmail(event,"${input.id}")`);
      }
      var br = document.createElement("br");
      var br1 = document.createElement("br");
      form.appendChild(input);
      form.appendChild(br);
      form.appendChild(br1);
    })
  }
}
