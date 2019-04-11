var Discord = require('discord.js');
var config = require('../config.json');
var gestionVoiceChannelJS = require('./gestionVoiceChannel.js');
//var admin = require('firebase-admin'); after for save all functions
exports.method = function(client, user){
    //check before create channel, if a new channel (0slot) already exist.
    if(checkChannel(client, user)){
        return;
    }
    var server = user.guild;
    let j = 2;
    for(let i = 1; i < j; i++){
        if(foundChannel(user, 'Vocal #'+[i])==false){
            //create this channel
            var nameChannel = 'Vocal #'+[i];
            server.createChannel(nameChannel, 'voice');
            console.log(config.botName + 'The channel: Vocal #' + [i] + " was created!");
            //set j to 0, for that, the loop for can't reach a new try.
            j = 0;
            return;
        }
        j++;
    }
}

function foundChannel(user, channel){
    return user.guild.channels.find(chan => chan.name === channel) === null ? false : true;
}

function checkChannel(client, user){
    for(let i = 1; i < 10; i++){
        console.log("i equal: "+i);
        if(foundChannel(user, 'Vocal #'+[i])){
            //if this chan exist, check if contains person or not
            var checkChannel = user.guild.channels.find(chan => chan.name === 'Vocal #'+[i])
            var checkChannelID = checkChannel.id;
            var checkChannelCount = client.channels.get(checkChannelID).members.array().length;
            if(checkChannelCount==0){
                //delet channel
                console.log('Empty channel already exist!');
                return true;
            }
            //return;
        }
    }
}