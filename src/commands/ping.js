var Discord = require('discord.js');
exports.method = function(client, channel, color, footer){
    var pingEmbed = new Discord.RichEmbed()
    .addField('Current latency :', Math.round(client.ping, 2) + ' milliseconds.')
    .setColor(color)
    .setFooter(footer)
    channel.send(pingEmbed);
}