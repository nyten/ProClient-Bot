var Discord = require('discord.js');
var config = require('./config.json');
var commands = require('./commands.js');

const client = new Discord.Client();


client.on('ready', ()=>{
    console.log(config.botName + 'launched!');
});

client.on('message', message =>{
  commands.initializeMessage(client, message);
});

client.login(config.token);

