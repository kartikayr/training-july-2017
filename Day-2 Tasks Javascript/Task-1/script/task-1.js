function myfunction () {
  let array = (document.getElementById("arr").value).split(" ");
  let n = Number(document.getElementById("n").value);
  document.getElementById("para").innerHTML ="Element at N th position is " + array[n-1];
}
