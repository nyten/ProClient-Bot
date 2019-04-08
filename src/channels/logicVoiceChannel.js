var Discord = require('discord.js');
var config = require('../config.json');
//var admin = require('firebase-admin'); after for save all functions
exports.method = function(client, user){
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