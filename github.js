//https://github.com/DevCyrus/Thonker
const {MessageEmbed, User} = require('discord.js');

module.exports = {
    name: 'github',
    description: 'The official github rep for the discord bot.',
    run: async(bot, message, args) => {
        const embed = new MessageEmbed()
        .setAuthor(`Command Ran By: ${message.author.username}`)
        .setColor("RANDOM")
        .setDescription(`Github Repository Link ➯ https://github.com/DevCyrus/Thonker`)
        .setFooter("Github Made VIA Cyrus#0550")
    
            message.channel.send(embed)
    },
};
