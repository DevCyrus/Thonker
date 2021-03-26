module.exports = {
    name: 'hello',
    description: 'Says Hello',
    run: async(bot, message, args) => {
        
        let member = message.mentions.members.first();
        if(!member) { message.channel.send('Hello is it me you are looking for!');} else {
            message.channel.send(`Hello ${member.user.tag} is it me you are looking for?`)
        }
    },
};  




