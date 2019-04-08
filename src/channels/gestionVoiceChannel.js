exports.method = function(client, user){
    //This method is called all time when action has done
    for(let i = 2; i < 10; i++){
        console.log("i equal: "+i);
        if(foundChannel(user, 'Vocal #'+[i])){
            //if this chan exist, check if contains person or not
            var checkChannel = user.guild.channels.find(chan => chan.name === 'Vocal #'+[i])
            var checkChannelID = checkChannel.id;
            var checkChannelCount = client.channels.get(checkChannelID).members.array().length;
            if(checkChannelCount==0){
                //delet channel
                checkChannel.delete()
                .then('We just deleted this channel: ' + checkChannel + '.');
            }
            return;
        }
    }
}

function foundChannel(user, channel){
    return user.guild.channels.find(chan => chan.name === channel) === null ? false : true;
}