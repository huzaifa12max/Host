const Client = new Discord.Client();

const keepAlive = require('./server.js')

keepAlive();
Client.login(process.env.TOKEN)
