const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

let database;

async function connect() {
	
	const client = await MongoClient.connect("mongodb://localhost:27017");
	//몽고디비를 가르키는 url이라고 함 / localhost관련 내용이라 goorm에서 먹힐지는 의문
	// 서버와 연결
	database = client.db("blog");
	// 서버의 블로그 데이터 베이스와 실제로 통신(몽고db shell)
	
}

function getDb(){
	if(!database){
		throw { message: "Database connection not established!" };
	}
	return database;
}

// 데이터베이스가 사용되기 전에 connect()가 먼저 호출되어야 함

module.exports = {
	connectToDatabase: connect,
	getDb: getDb
};

// 이 파일을 사용하는 파일에서 사용할 이름 : 이 파일에서의 이름
//()가 없는 이유는 지금 실행하는 것이 아니기에 없다.