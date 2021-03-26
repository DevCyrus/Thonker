  
module.exports = {
    name: 'bye',
    description: 'Tell you bye...Would not want to be you though....',
    run: async(bot, message, args) => {

        let member = message.mentions.members.first();
        if(!member) { message.channel.send('See ya would not wanna be ya but, I guess you were not looking for me :(');} else {
            message.channel.send(`See ya would not wanna be ya ${member.user.tag} but, I guess you were not looking for me....`)
        }
    },
};

