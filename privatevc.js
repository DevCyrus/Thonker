module.exports = {
    name: 'privatevc',
    description: 'Creates a private voice channel!',
    run: async(bot, message, args) => {
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!member) return message.channel.send("No member found!");
        let role = await message.guild.roles.create({
            data: {
              name: '🎤',
              color: 'RANDOM',
            }
          })
    
        let channel = await message.guild.channels.create(`${message.author.username}-${member.user.username} Private VC`, {
            type: 'voice',
            permissionOverwrites: [
                {
                    id: role.id,
                    allow: ['CONNECT', 'SPEAK', 'VIEW_CHANNEL']
                },
                {
                    id: message.guild.roles.everyone.id,
                    deny: ['CONNECT', 'SPEAK', 'VIEW_CHANNEL']
                }
            ]
        })
    
        member.roles.add(role);
        message.member.roles.add(role);
        message.channel.send(`Private VC has been created! Get talking at ${channel}`)
    },
};
