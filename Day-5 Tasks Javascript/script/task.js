class main{
  constructor(value){
    this.value=value
  }
  isPangram(str) {
    var string=str.value;
    var regex = /([a-z])(?!.*\1)/g;
    if((string.match(regex) || []).length === 26)
      alert("Pangram");
    else
      alert("Not Pangram");
  }
  input(numb){
    var string="";
    let n=Number(numb.value);
    var array=new Array();
    for(var i=0;i<n;i++){
      array[i]=String(prompt(`Enter string ${i+1} :`));
    }
    return array;
  }
  isCons(numb){
    let array=this.input(numb);
    var arr=array.length;
    var string="";
    for(var i=0;i<arr;i++){
      var str=array[i];
      var count=0;
      var len=str.length;
      for(var j=0;j<len-1;j++){
        if(str[j]===str[j+1])
          count++;
      }
      string += `Number of Deletions required for ${array[i]} is ${count}<br>`;
    }
    document.getElementById("para").innerHTML = string;
  }
  reduceString(str) {
    var ar = new Array(str.length);
    for(var i=0;i<str.length;i++){
      if(ar.indexOf(str[i])==-1)
        ar.push(str[i]);
    }
    str=ar.join('');
    return str;
  }
  isGem(numb){
    let array = this.input(numb);
    let map = new Array(26);
    var string;
    var count=0;
    map.fill(0);
    array.forEach(item =>{
      var str=String(item);
      str=this.reduceString(str);
      for(var i=0;i<str.length;i++)
          map[str.charCodeAt(i)-97]++;
    })
    var len=array.length;
    for(var i=0;i<26;i++){
      if(map[i]==len)
        count++;
    }
    string = `Number of gem-elements in all ${array.length} strings are : ${count} `
    document.getElementById("para").innerHTML = string;
  }
  deletion(numb){
    let array = this.input(numb);
    var string = "";
    array.forEach(item=>{
      var ar = item.split('');
      var index=-1;
      for(var i=0;i<ar.length;i++)
      {
        if(ar[i]!==ar[ar.length-i-1]){
          if(ar[i]===ar[ar.length-i-2])
            index=ar.length-i-1;
          else
            index=i;
          break;
        }
      }
      string += `${item} : ${index}<br>`;
      })
      document.getElementById("para").innerHTML = string;
  }
} main = new main();
