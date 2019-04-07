exports.method() = function(message, color, footer){
    var inviteEmbed = new Discord.RichEmbed()
    .addField('Invite for '+message.guild.name+'server :', 'https://discord.gg/not-ready-yet')
    .setColor(color)
    .setFooter(footer);
    message.channel.send(inviteEmbed);
}