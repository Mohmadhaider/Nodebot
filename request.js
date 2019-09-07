var request = require('request');
const readline = require('readline');

 const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

  rl.question('You: ', (answer) => {
var myJSONObject = {"text": answer };
request({
    url: "http://11fc6e51.ngrok.io/model/parse",
    method: "POST",
    json: true,
    body: myJSONObject   // <--Very important!!!
}, function (error, response, body){
	output = response["body"];
	text  =output["text"]
	intent = output["intent"]["name"];
	confidence = output["intent"]["confidence"];
	entities = output["entities"];
    	console.log("Your Text: ",text);
	console.log("Intent: ",intent);
	console.log("Confidence: ",confidence);
	console.log("Entities: ",entities);
});
  rl.close();
});