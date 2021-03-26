const Discord = require('discord.js')
const {MessageEmbed} = require('discord.js');


module.exports = {
    name: 'releasedate',
    description: 'Private command-Rlease date.',
    run: async(bot, message, args) => {

          const embed = new MessageEmbed()

        .setTitle('Official Release Date of Thonker.')
        .setDescription('3(March)/26/21!')
        .setFooter('Thonker made VIA Cyrus#0550')
        .setColor("BLUE")
            message.channel.send(embed)
    },
};