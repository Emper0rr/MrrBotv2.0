const Discord = require('discord.js');
require ("dotenv-flow").config()
const fs = require("fs")
const Enmap = require("enmap")


const client = new Discord.Client();
const config = {
    token: "NjM4NDc5Nzg2OTUxNTczNTU1.Xbi4-w.KGIb-AgkxNTQK2bVfFfg8cvsK2g",
    prefix: "!!",
    owner: "MrrKing"
}

const prefix = config.prefix


client.once('ready', () => {
	console.log('Ready!');
});
client.on('message', message => {
    if (message.author.bot) return
        if (message.channel.id === "638846986325458947") {
            // Deal with command
        
            const args = message.content.slice(prefix.length).trim().split(/ +/)
            const command = args[0].toLowerCase()
            console.log(args)
            switch(command) {
                case "register": {
                    
                    console.log(args.slice(-1)[0])

                            
                    fs.appendFile('part.txt',"name: "+ message.content.slice(10).replace(/\w+[.!?]?$/, '') +" platform: "+args.slice(-1)[0].toLowerCase() + "\n" , function (err) {
                        if (err) throw err;
                        console.log('registerd.');
                        message.channel.send("Registerd succesfully")
                        
                    }); 

                break;

                }
                default:
                    message.channel.send("Command unknown")
        }

    }

});


client.login(config.token);
