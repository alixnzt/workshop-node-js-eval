var input = [
  { operator: 'add', value: 2 },
  { operator: 'substract', value: 4 },
  { operator: 'add', value: 3 }
]

var result = 0

//console.log(input);
for (var i = 0; i <= input.length-1; i++) {
	var operation = input[i]
  	console.log("-----------")
 	//console.log("operation :", operation);
	// console.log("operator : ", operation.operator)
	// console.log("value : ", operation.value)

	if (operation.operator === 'add') {
  		return result = result + operation.value;
	  }
	  else if (operation.operator === 'substract') {
	  	return result = result - operation.value;
	  }
  }
  console.log(result);


exports.run = function(input) {
  console.log("Exercise #3");
  
};
