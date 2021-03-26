const Discord = require('discord.js')
module.exports = {
    name: 'ping',
    description: 'Shows the ping of the bot.',
    run: async(bot, message, args) => {
        const ping = new Discord.MessageEmbed()
        .setDescription(`🏓\`${Date.now() - message.createdTimestamp} ms\``);
        
        message.channel.send(ping) //so it replys to the `.ping` command 
    },
};
