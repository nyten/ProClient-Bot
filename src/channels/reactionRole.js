exports.method = function(event, client){
    if(event.t === 'MESSAGE_REACTION_ADD'){
        let channel = client.channels.get(event.d.channel_id);
        channel.fetchMessage(event.d.message_id).then(msg=>{
            let user = msg.guild.members.get(event.d.user_id);
                if(channel.id==563304553433530368){
                var userObj =  msg.guild.members.get(user.id);
                var roleObj = msg.guild.roles.find(r => r.name === '(verified)');
                userObj.addRole(roleObj);
                }
        });
      }
}