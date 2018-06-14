const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', (message) => {
    if (message.content == "ping") {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login("NDUwMzM0NjE1NjM1MzYxODIz.DgQIRA.WfvWPeay08bFtHHf5A_6dyaT0qo");
