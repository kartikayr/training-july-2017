class sunday{
  constructor(num1,num2){
    this.num1=num1;
    this.num2=num2;
  }
  count(){
    var no1=this.num1;
    var no2=this.num2;
    for (var year=no1;year<=no2;year++)
    {
    var d = new Date(year, 0, 1);
    if ( d.getDay() == 0 )
        document.write("1st January is being a Sunday "+year+"\n\n\n");
    }
  }
}

function myfunction(){
  let num1=Number.parseInt(document.getElementById("no1").value);
  let num2=Number.parseInt(document.getElementById("no2").value);
  const obj=new sunday(num1,num2);
  obj.count();
}
