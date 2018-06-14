const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!";

client.on('ready', function() => {
    console.log('I am ready!');
});

client.on('message', function(message) => {
    if (message.authot.equals(bot.user)) return;

    if (message.content == "нет") {
        message.channel.sendMessage("да")
  	}
});
        if (!message.content startsWith(prefix)) return;
        
        var args = message.content.substing(prefix.length).split(" ");
        
        switch (args[0]); {
            case 'ping';
            message.channel.sendMessage('nope');
            break;
        }
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login("NDUwMzM0NjE1NjM1MzYxODIz.DgQIRA.WfvWPeay08bFtHHf5A_6dyaT0qo");
