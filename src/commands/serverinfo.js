var Discord = require('discord.js');
exports.method = function(message, color, footer){
    var sinfoEmbed = new Discord.RichEmbed()
    .setTitle('Statistics about '+message.guild.name+' server :')
    .addField('Total members :', message.guild.members.size, true)
    .addField('Total roles :', message.guild.roles.size, true)
    .addField('Total channels :', message.guild.channels.size, true)
    .addField('Current owner :', message.guild.owner.displayName, true)
    .addField('Created at :', message.guild.createdAt, true)
    .addField('Server region :', message.guild.region, true)
    .addField('Verification level :', message.guild.verificationLevel, true)
    .setThumbnail(message.guild.iconURL)
    .setColor(color)
    .setFooter(footer)
    message.channel.send(sinfoEmbed)
}