let array=[];
let id=[1];
let check=[];
let count=0;
function addrow() {
    var table = document.getElementById("myTable");
    var len=Number(document.getElementById("myTable").getElementsByTagName('tr').length);
    id.push(len);
    var row = myTable.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML ='<input type="checkbox" id="chbox'+len+'" name="checkbox" value="checkbox"></input>';
    cell2.innerHTML = '<input type="text" id="txtName'+len+'" name="textvalue" value=""></input>';
    cell3.innerHTML = '<input type="button" name="cancel" value="cancel" onclick="deleterow(this)"></input>';
}
function deleterow(row) {
    let i=row.parentNode.parentNode.rowIndex;
    count=id[i-1];
    id.splice((i-1),1);
    array.splice(array.indexOf(document.getElementById("txtName"+(count)).value),1);
    document.getElementById('myTable').deleteRow(i);
}
function push() {
    var str;
    id.forEach(item =>{
      if ((document.getElementById("chbox"+item)).checked)
      {
        str=document.getElementById("txtName"+item).value;
        array.push(str);
      }
    })
   alert("Pushed/Poped");
}
function length() {
    var len = Number(document.getElementById("myTable").getElementsByTagName('tr').length);
    alert(len-1);
}
function show() {
   	var str1="";
   	array.forEach(item => (str1=str1 + " | " + item));
   	alert(str1);
}
function delsel() {
   	id.forEach(item =>{
     	if ((document.getElementById("chbox"+item)).checked) {
       	check.push(item);
      	}
    	});
    	check.reverse();
    	check.forEach(item2 =>{
    	id.splice((id.indexOf(item2)),1);
    	array.splice(array.indexOf(document.getElementById("txtName"+(item2)).value),1);
    	document.getElementById('myTable').deleteRow(item2);
    	});
}