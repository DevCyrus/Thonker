module.exports = {
    name: 'support',
    description: 'Gives a external discord link to the Thonker discord support server.',
    run: async(bot, message, args) => {
        
        message.channel.send(`__Thonker Support Server__\n\n *<https://discord.gg/6BnVhqXQzA>*`)
        
    },
};
