class modal{
  constructor(){
  }
  myprompt(){
    var n=document.getElementById('name').value;
    document.getElementById("here").innerHTML = `Hello ${n}`;
  }
}
