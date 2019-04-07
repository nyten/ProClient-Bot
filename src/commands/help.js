var Discord = require('discord.js');
exports.method = function(message, color, footer, specialArgs, prefix){
    var helpEmbed = new Discord.RichEmbed();
    helpEmbed.setColor(color).setFooter(footer);
    switch(specialArgs){
        case undefined:
        helpEmbed
        .addField('Commands categories :', '"p!help commons" > General purpose.\n"p!help misc" > Miscellaneous purpose.')
        .setColor(color)
        .setFooter(footer)
        break;
        case 'commons':
        helpEmbed.addField('Common commands list :', '**'+prefix+'help** (Displays this list).\n'+'**'+prefix+'ping** (Get the current client ping).\n'+'**'+prefix+"invite** (Get an invite link)\n"+'**'+prefix+'serverinfo** (Get server statistics)\n'+'**'+prefix +"userinfo** <*user*> (Informations about a user)", true)
        break;
        case 'misc':
        helpEmbed.addField('Miscellaneous commands list :', 'Any commands yet.')
        break;
        case 'mods':
        if (!message.member.roles.has('(admin1)')) {
            helpEmbed
            .addField('Error :', 'You are lacking moderator permissions.')
        } else {
            helpEmbed
            .addField('Moderator commands list :', '**'+prefix+'kick** [*user*] (Kick a user from the server')
        } 
        break;
    }
    message.channel.send(helpEmbed);
}