var Discord = require('discord.js');
exports.method = function(message, color, footer){
    if (!message.member.hasPermission('KICK_MEMBERS')) {
        var kickEmbed = new Discord.RichEmbed()
        .addField('Error :', 'You are lacking ``KICK_MEMBERS`` permission.')
        .setColor(color)
        .setFooter(footer)
        message.channel.send(kickEmbed)
    } else if (!target) {
        var kickEmbed = new Discord.RichEmbed()
        .addField('Error :', 'You have to specify a target.')
        .setColor(color)
        .setFooter(footer)
        message.channel.send(kickEmbed)
    } else if (!reason2) {
        var kickEmbed = new Discord.RichEmbed()
        .addField('Error :', 'You have to specify a reason.')
        .setColor(color)
        .setFooter(footer)
        message.channel.send(kickEmbed)
    } else {
        var kickEmbed = new Discord.RichEmbed()
        .addField('User kicked :', target+' has been kicked from the server ('+reason2+')')
        .setColor(color)
        .setFooter(footer)
        message.channel.send(kickEmbed).then(message.guild.member(target).kick(reason2))
    }
}