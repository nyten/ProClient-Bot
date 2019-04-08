var Discord = require('discord.js');
var config = require('./config.json');
var commands = require('./commands.js');
var gestionVoiceChannelJS = require('./channels/gestionVoiceChannel.js');
var logicVoiceChannelJS = require('./channels/logicVoiceChannel.js');

const client = new Discord.Client();

client.on('ready', ()=>{
    console.log(config.botName + 'launched!');
});


client.on('message', message =>{
  commands.initializeMessage(client, message);
});

client.on('voiceStateUpdate', (oldmember, newmember)=>{
  console.log(oldmember);
  let newvoice = newmember.voiceChannel;
  if(newvoice===undefined){
    gestionVoiceChannelJS.method(client, newmember);
    return;
  }
  logicVoiceChannelJS.method(client, newmember);
});

client.on('channelCreate', (channel) => {
  channel.setParent('563268792466014208');
})

client.login(config.token);

