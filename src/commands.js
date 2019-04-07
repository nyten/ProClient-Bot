var config = require('./config.json');
var prefix = config.prefix;

exports.initializeMessage = function(client, message){
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(' ');
    const command = args.shift().toLowerCase();
    const channel = message.channel;
    const color = config.color;
    const footer = config.footer;
    switch(command){
        // 07/04/2019, i didn't add parameters to method, so if you would like 
        // for exemple call this: helpJS.method(user), set the user in help.js, like this function(user)..
        case 'help':
        // We check the command .help
        var helpJS = require('./commands/help.js');
        helpJS.method(message, color, footer, args[0], prefix);
        break;
        case 'ping':
        // We check the command .ping
        var pingJS = require('./commands/ping.js');
        pingJS.method(client, channel, color, footer);
        break;
        case 'bug-report':
        // We check the command .bug-report
        var bugReportJS = require('./commands/bug-report.js');
        console.log(bugReportJS.method());
        break;
        case 'kick':
        // We check the command .kick
        var kickJS = require('./commands/kick.js');
        kickJS.method(message, color, footer);
        break;
        case 'warn':
        // We check the command .warn
        var warnJS = require('./commands/warn.js');
        warnJS.method(message, color, footer);
        break;
        case 'serverinfo':
        // We check the command .serverinfo
        var serverInfoJS = require('./commands/serverinfo.js');
        serverInfoJS.method(message, color, footer);
        break;
        case 'invite':
        // We check the command .invite
        var inviteJS = require('./commands/invite.js');
        inviteJS.method(message, color, footer);
        break;
    }

    return message;
}