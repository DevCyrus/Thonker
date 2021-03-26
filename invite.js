// https://discord.com/api/oauth2/authorize?client_id=820112589823803393&// // permissions=8&scope=bot

module.exports = {
    name: 'invite',
    description: 'Gives a invite link.',
    run: async(bot, message, args) => {
        
        message.channel.send(`__Thonker Invite Link__\n\nhttps://discord.com/api/oauth2/authorize?client_id=820112589823803393&permissions=8&scope=bot`)

    
    },
};




