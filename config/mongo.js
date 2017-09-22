function Mongo() {
	var mongoCredentials = {
		uri: 'localhost',
		port: '27017',
		db: 'mean-chat',
		credentials: {
			user: "",
			pass: "",
			auth: {
				authdb: 'admin'
			}
		}
	}
	this.connection = mongoCredentials;
}

module.exports = new Mongo();