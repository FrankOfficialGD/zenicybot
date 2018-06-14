const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', (message) => {
    if (message.content == 'да') {
    	message.reply('нет');
  	}
});
client.on('message', (message) => {
    if (message.content == 'нет') {
    	message.reply('да');
  	}
});
client.on('message', (message) => {
    if (message.content == 'пошёл нахуй') {
    	message.reply('сам иди, козёл!');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login("NDUwMzM0NjE1NjM1MzYxODIz.DgQIRA.WfvWPeay08bFtHHf5A_6dyaT0qo");
