const Discord = require('discord.js')

module.exports = {
    name: 'howgay',
    description: 'Lets see how gay you are!',
    run: async(bot, message, args) => {
        let member = message.mentions.users.first() || message.author

        let rng = Math.floor(Math.random() * 101);
    
        const howgayembed = new Discord.MessageEmbed()
        .setTitle(`Gay Machine Calculator`)
        .setDescription(`${member.username} is ` + rng + "% Gay🌈")
        .setColor("GREEN")
    
        message.channel.send(howgayembed);
    },
};

 
 