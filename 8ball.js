//module.exports = {
//    name: 'name of command',
  //  description: 'description',
    //run: async(bot, message, args) => {
         // PUT CODE 
   // },
//};



const {MessageEmbed} = require('discord.js');

module.exports = {
    name: '8ball',
    description: 'Ask the magic 8ball a question!',
    run: async(bot, message, args) => {
        const answers = [
            'Yes', 'Certainly', 'No', 'Maybe'
        ];
    
        const a = answers[Math.floor(Math.random() * answers.length)]
    
        return message.channel.send(
            new MessageEmbed()
                .setAuthor('Magical 8Ball')
                .setDescription(
                    `Question: ${args.join(' ')}\nAnswer: ${a}`
                    )
                    .setColor('RANDOM')
        )
    
    },
};
  
  