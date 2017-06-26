class show{
  day(num1){
    switch(num1){
    case '0': window.alert("Today is Sunday");break;
    case '1': window.alert("Today is Monday");break;
    case '2': window.alert("Today is Tuesday");break;
    case '3': window.alert("Today is Wednesday");break;
    case '4': window.alert("Today is Thursday");break;
    case '5': window.alert("Today is Friday");break;
    case '6': window.alert("Today is Saturday");break;
  }
}
}
function myday(){
    var d = new Date();
    switch(d.getday()){
    case 0: window.alert("Today is Sunday");break;
    case 1: window.alert("Today is Monday");break;
    case 2: window.alert("Today is Tuesday");break;
    case 3: window.alert("Today is Wednesday");break;
    case 4: window.alert("Today is Thursday");break;
    case 5: window.alert("Today is Friday");break;
    case 6: window.alert("Today is Saturday");break;
  }
}
function mydate(){
  var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd = '0'+dd
}
if(mm<10) {
    mm = '0'+mm
}
var today1= mm + '-' + dd + '-' + yyyy;
today = mm + '/' + dd + '/' + yyyy;
document.write(today1 + " " + today);
}
