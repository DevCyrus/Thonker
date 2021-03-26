const Discord = require('discord.js')
const {MessageEmbed} = require('discord.js');


module.exports = {
    name: 'outages',
    description: 'Private command-Yes.',
    run: async(bot, message, args) => {

          const embed = new MessageEmbed()

        .setTitle('Outages and Ups of Thonker!')
        .setDescription(`Thonker: 🟢\n\nWebsite: 🔴\n\nCommands:🟢\n\n\n**General idea of how the outage command works.**\n*Green cirlce= Up | Yellow circle= Semi Functional | Red circle= Major outage.*`)
        .setFooter('Live Updates ASAP')
        .setColor("GREEN")

            message.channel.send(embed)
    },
};