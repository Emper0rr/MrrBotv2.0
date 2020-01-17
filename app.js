const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
    
});

client.on('message', message => {

    const prefix = "!"
    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const cmd = args.shift().toLowerCase()
    
    if (message.content.startsWith(prefix)){
        console.log(cmd)
        if (message.channel.id == "647820785624416268"){
            if (cmd === "dmall") {
                const text = message.content.slice('6')
                message.guild.members.forEach(member => {
                if (member.id != client.user.id && !member.user.bot) member.send(text);
                
                });
     
            }
        }
    }

    
});


client.login('NjM4NDc5Nzg2OTUxNTczNTU1.XiHUCw.xDhrNHhfo5_Yhd_sXPq63Wi63MY');
