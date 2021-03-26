//  ODIwMTEyNTg5ODIzODAzMzkz.YEwbXg.B5_HoHDnIfuIpk8kBR1TQMbpQew
const Discord = require('discord.js')
const bot = new Discord.Client();

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
const fs = require("fs")

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    bot.commands.set(command.name, command);
}


bot.on('ready', () => {
    console.log('Bot online')

})


bot.on('message', (message) => {
    if(message.author.bot) return;
    if(message.channel.type !== 'text') return;
    let prefix = 'th!';
    
    if(!message.content.startsWith(prefix)) return;
    let MessageArray = message.content.split(' ');

    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();
    if (cmd.length === 0) return;
    let command = bot.commands.get(cmd)
    if(command) command.run(bot, message, args)




    let commandfile = bot.commands.get(cmd);


})

bot.on('guildMemberUpdate', (oldMember, newMember) => {
    if(oldMember.nickname !== newMember.nickname) {
        newMember.send('You changed your nickname!')
    }
    let oldAvatar = oldMember.user.avatarURL() // https://link.com
    let newAvatar = newMember.user.avatarURL(); // https://link.com
    if(oldAvatar !== newAvatar) {
        newMember.send('Your avatar has changed!')
    }
    
    
})


bot.on('guildMemberAdd', (member) => {
    let embed = new Discord.MessageEmbed()
    .setTitle('Welcome to my server!')
    .setDescription(`Thank you for joining my server! Make sure to stay active and talk to the other members!\n**Current Member Count:** ${member.guild.memberCount}\n**Owner:** ${member.guild.owner.user.tag}`)
    .setColor('#cc3300')
    .setAuthor(member.guild.owner.user.tag, member.guild.owner.user.avatarURL())
    .setFooter(member.guild.name, member.guild.iconURL())
    .setThumbnail(member.user.avatarURL());

    member.send(embed)
})




bot.login("ODIwMTEyNTg5ODIzODAzMzkz.YEwbXg.B5_HoHDnIfuIpk8kBR1TQMbpQew")