require('dotenv').config();
//const Discord = require('discord.js');
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
//const client = new Discord.Client();

client.on('ready', () => {
    console.log('Our Bot is ready to goooooo!!!');
});

client.on('message', msg => {
    if(msg.content === '!hi'){
        //msg.reply("Hello!");
        msg.channel.send('Hello!');
    }
    else if(msg.content === '!jerkme'){
        msg.member.roles.add('jerk');
    }
    else if(msg.content === '!teachme'){
        msg.member.roles.add('Student');
    }
});

client.login(process.env.BOT_TOKEN);