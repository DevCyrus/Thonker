const Discord = require('discord.js')
module.exports = {
    name: 'pong',
    description: 'Bro just no.',
    run: async(bot, message, args) => {
        message.channel.send(`Pong? I think you made a little typo. Try typing !ping.`)
 
    },
};
