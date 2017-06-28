class prime{
  constructor(num1,num2) {
    this.num1=num1;
    this.num2=num2;
  }
  test_prime(n){
    if (n===1)
      return false;
    else if(n === 2)
      return true;
    else
    {
      for(var x = 2; x<n; x++)
      {
        if(n % x === 0)
        {
          return false;
        }
      }
      return true;
    }
  }
  sop(){
    let no1=this.num1;
    let no2=this.num2;
    let i=0,value=0;
    for(i=no1;i<=no2;i++)
    {
      if(this.test_prime(i))
        value+=i;
    }
    window.alert("Sum of prime numbers between "+no1+" and "+no2+" is "+value);
  }
}

function myfunction() {
  let num1=Number.parseInt(document.getElementById("no1").value);
  let num2=Number.parseInt(document.getElementById("no2").value);
  const obj = new prime(num1,num2);
  obj.sop();
}
