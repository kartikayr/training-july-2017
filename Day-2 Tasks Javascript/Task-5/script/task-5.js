let array = [];
function add(){
  array.push({
        id: document.getElementById('id').value,
        name: document.getElementById('name').value,
        age: document.getElementById('age').value,
        gender: document.getElementById('gender').value
    });
}
function display(){
  let id = Number(document.getElementById('id1').value);
  alert("Name : "+array[id-1].name);
  alert("Age : "+array[id-1].age);
  alert("Gender : "+array[id-1].age);
}
function remove(){
  let id = Number(document.getElementById('id2').value);
  array.splice(id-1,1);
}
