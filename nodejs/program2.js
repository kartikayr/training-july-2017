var sum=0;
process.argv.forEach(item=>{
	var index = process.argv.indexOf(item);
	if(index>1)
		sum+=Number(item);
	});
console.log(sum);