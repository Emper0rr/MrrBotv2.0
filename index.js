// require the discord.js module
const Discord = require('discord.js');

// create a new Discord client
const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
prefix = "!"
client.once('ready', () => {
    console.log('Ready!');
    
});

client.on('message', message => {

    if (message.content.startsWith(prefix+"dmall")){
    

        let text = message.content.slice("!dmall ".length)
        message.guild.members.forEach(member => {
            if (member.id != client.user.id && !member.user.bot) member.send(text);
        });

    }
    

	
});

// login to Discord with your app's token
client.login('NTg1MjI0NDc2MTIwMDU1ODA5.XaneDQ.J5gnCy-I5GewmxNgDPh3iOrDmo4');
