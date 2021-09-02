const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "help",
  aliases: ["h"],
  cooldown: 8,
  description: "**Music Help**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setImage(`https://media.discordapp.net/attachments/875408935581016114/883070197790036028/7d20.gif`)

    .setAuthor(`Moon Light`, `https://media.discordapp.net/attachments/853738123100291133/881541545428418630/PicsArt_08-29-05.01.58.png`)
    .setDescription(`

<a:emoji_2:872570903945441390>┃ **User Commands**
> \`invite . support . about . ping . prefix . uptime . avatar . se . invites . embed . serverinfo . userinfo(user) . servericon(icon)\`

<a:emoji_90:882032776591835208>┃ **Music Commands**
> \`play . skip . skipto . stop . volume . nowplaying . shuffle . search . resume . remove . queue . filter . loop . lyrics . radio\`

<:emoji_86:881599445509238845>┃ **Fun Commands**
> \`lock(l) . unlock(ul) . ban . unban . slowmode . giveaway . cv . mute . unmute . say . bans . clear\`

<a:emoji_5:872571053086503012>┃ **Links**
[support](https://discord.gg/urSTKbdQ7e)    -    [invite](https://discord.com/api/oauth2/authorize?client_id=881148979373555763&permissions=261724045121&scope=bot)
`)

   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("#FF55FF");
   message.react("<a:like:813847731285393439>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
