const Discord = require('discord.js');
const { prefix, token, giphyToken } = require('./config.json');
const client = new Discord.Client();


var GphApiClient = require('giphy-js-sdk-core')
giphy = GphApiClient(giphyToken)


client.once('ready', () => {
    console.log('Ready!')
})

client.on('message', message => {
   

        if(message.content.startsWith(`${prefix}kick`)) {
        message.channel.send("kick")
         }
         if(message.content.startsWith(`${prefix}hello`)){
            message.channel.send("hey, how are you")
            }
            if(message.content.startsWith(`${prefix}Fine`)){
                message.channel.send("ohh great")
            }
            if(message.content.startsWith(`${prefix}who are you`)){
                message.channel.send("i am sanjay's assistant")
            }
            if(message.content.startsWith(`${prefix}where are you from`)){
                message.channel.send("i'm from javascript word")
            }
            if(message.content.startsWith(`${prefix}your age`)){
                message.channel.send("i have infinity age")
            }
            if(message.content.startsWith(`${prefix}had your lunch`)){
                message.channel.send("yeah, i'm charged up")
            }
            if(message.member.hasPermission(['KICK_MEMBERS','BAN_MEMBERS'])) {
                if(message.content.startsWith(`${prefix}kick`)) {
                        let member = message.mentions.members.first();
                       member.kick().then((member) => {
                           giphy.search('gifs', {"q": "fail"})
                           .then((response) =>{
                               var totalResponeses = response.data.length;
                               var responseIndex = Math.floor((Math.random() * 10) + 1) % totalResponeses;
                               var responseFinal = response.data[responseIndex];

                               message.channel.send(":wave: " + member.displayName + " has been kicked!", {
                                    files: [responseFinal.images.fixed_height.url]
                               })

                           }).catch(() => {
                            message.channel.send("error ugh!");
                           })
                       })
                     }
                    }
             

})


client.login(token);