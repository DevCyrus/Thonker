const {MessageEmbed, User} = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Help command...Shows every...single...command of the bot...',
    run: async(bot, message, args) => {
        const embed = new MessageEmbed()
        .setAuthor(`Command Opened Via: ${message.author.username}`)
        .setTitle("Help is on its way!")
        .setColor('BLUE')
        .setFooter(`Prefix: th!`)
        .setDescription(`__Commands__\n\n8ball: Using this command while pairing it up with asking it a question will work wonders!\nth!ban: Mentioning an user and giving a reason will ban that user form the guild.\n!bye: Boi get out of here!\nth!github: This will give a link to the bots github(code)\nth!hello: Hello is it me you're looking for?\nth!help Gives you a list of all the commands.\nth!howgay: Lets see how gay you are...\nth!kick: Pairing this up with the same stuff as the ban command will kick them!\nth!meme: This will pull out a meme straight from the Reddit DB.\nth!ping: The bots ping.\nth!poll Pairing this up with mentioning a text channel and your poll contex will send a poll to that channel you mentioned.\nth!pong: Nah you're just dumb...\nth!private: Will automatically create a private text channel with the member you mention!\nth!privatevc: Will make a private VC with whom you mention.\nth!rps: Rock..Paper...Scissors..\nth!shrug: Shrugs at you.\nth!abcs: Abcs fuck yea'\nth!invite: Thonkers invite link.\nth!support: Gives a external link to the support server for Thonker.`)
        message.channel.send(embed);
    },
};
  