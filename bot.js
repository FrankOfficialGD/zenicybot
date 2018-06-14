const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message',(message)) -> {

if (message.content == 'да'){
message.channel.sendMessage('нет');
}
});

client.login("NDUwMzM0NjE1NjM1MzYxODIz.DgQIRA.WfvWPeay08bFtHHf5A_6dyaT0qo");
