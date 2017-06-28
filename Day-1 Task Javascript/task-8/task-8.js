class sortArrayObObject{
  sortObjects () {
    let john = { name: "John Smith", age: 23 };
    let  mary = { name: "Mary Key", age: 18 };
    let bob = { name: "Bob-small", age: 6 };
    let  people = [ john, mary, bob ];
    var str=" ";
    let byName=people.slice(0);
    byName.sort(function(a,b){
      var x= a.name.toLowerCase();
      var y= b.name.toLowerCase();
      if (x<y) {
        return -1;
      }
      else if (x>y) {
        return 1;
      }
      else {
        return 0;
      }
   });
  for (var i=0;i<byName.length;i++) {
      str=str+" ' "+byName[i].name+" ' ";
  }
  document.getElementById("para").innerHTML ="sorted name is ["+str+"]";
  }
}
function myfunction () {
  const obj=new sortArrayObObject();
  obj.sortObjects();
}
