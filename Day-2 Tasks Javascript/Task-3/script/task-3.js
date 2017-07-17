function myfunction () {
  let date1=new Date(document.getElementById("date1").value);
  let date2=new Date(document.getElementById("date2").value);
  let d1,d2,days;
  d1=Date.parse(date1);
  d2=Date.parse(date2);
  if (d1>d2) {
    days=((d1-d2)/(1000*60*60*24));
  }
  else {
    days=((d2-d1)/(1000*60*60*24));
  }
document.getElementById("para").innerHTML="No of days difference in  the dates is "+days;

}
