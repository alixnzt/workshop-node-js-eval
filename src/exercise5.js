var fs = require('fs');
var file = process.argv[2];
var file = fs.readFile(file, (err, data) => {
	//var output = data;
	console.log(data)
})

exports.run = function(input) {
  console.log("Exercise #5");
};
