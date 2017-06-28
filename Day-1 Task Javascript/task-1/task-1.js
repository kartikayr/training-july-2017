function odd_even(){
  var no;
  no=document.getElementById("no_input").value;
  if(!isNaN(no))
  {
  if(Number(no)%2==0)
  {
      alert("Even Number");
    }
    else
    {
        alert("Odd Number");
      }
  }
else {
  alert("Enter a number pls!");
}
}
