var Discord = require('discord.js');
exports.method = function(message, color, footer){
    if (!message.member.hasPermission('MANAGE_MESSAGES')) {
        var warnEmbed = new Discord.RichEmbed()
        .addField('Error :', 'You are lacking ``MANAGE_MESSAGES`` permission.')
        .setColor(color)
        .setFooter(footer);
        message.channel.send(warnEmbed);
    } else {
        var reason = command.substring(prefix.length).split ("warn "+target+" ")
        var warnEmbed = new Discord.RichEmbed()
        .addField('User warned :', target+' has been warned ('+reason+')')
        .setColor(color)
        .setFooter(footer)
        message.channel.send(warnEmbed)
        var warnEmbed = new Discord.RichEmbed()
        .setTitle('New warn :')
        .addField('Infractor :', target, true)
        .addField('Moderator :', message.author, true)
        .addField('Reason :', reason, true)
        .setThumbnail(target.avatarURL)
        .setColor(color)
        .setFooter(footer)
        message.guild.channels.find('id', '564189094012387341').send(warnEmbed)
    }
}