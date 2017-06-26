function myfunction () {
  let array = (document.getElementById("arr").value).split(" ");
  let forDeletion = ['null','0','""','false','undefined','NaN'];
  let str="";
  array = array.filter(item => !forDeletion.includes(item));
  array.forEach(item =>(str=str + " " + item))
  document.getElementById("para").innerHTML="Array element after removing above element are " + str;
}
