const mongodb = require("mongodb");

const MongoClient = mongo.MongoClient;

async function connect() {
	
	const client = await MongoClient.connect("mongodb://localhost:27017");
	//몽고디비를 가르키는 url이라고 함 / localhost관련 내용이라 goorm에서 먹힐지는 의문

	
}

