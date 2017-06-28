function myfunction () {
  let array1 = (document.getElementById("arr1").value).split(" ");
  let array2 = (document.getElementById("arr2").value).split(" ");
  let array3=[];
  var str="";
  array3=array1.filter(item => array2.includes(item));
  array3=array3.sort();
  array3.forEach(item =>(str=str +" " + item));
  document.getElementById("para").innerHTML="Element of intersection array are "+ str;
}
