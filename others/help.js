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
    .setImage(`https://cdn.discordapp.com/attachments/793209080978210858/841880624104603738/standard_1.gif`)

    .setAuthor(`Moon Light`, `https://media.discordapp.net/attachments/853738123100291133/881541545428418630/PicsArt_08-29-05.01.58.png`)
    .setDescription(`

<a:emoji_19:818845027438166026>┃ **User Commands**
> \`invite . support . about . ping . prefix . uptime . avatar . se . invites . embed . serverinfo . userinfo(user) . servericon(icon)\`

<a:emoji_15:818839370730569760>┃ **Music Commands**
> \`play . skip . skipto . stop . volume . nowplaying . shuffle . search . resume . remove . queue . filter . loop . lyrics . radio\`

<a:emoji_18:818844275750993940>┃ **Fun Commands**
> \`lock(l) . unlock(ul) . ban . unban . slowmode . giveaway . cv . mute . unmute . say . bans . clear\`

<a:emoji_48:837422969453936640>┃ **Game Commands**
> \`slap . hug\`

<a:fara:837363207475560470>┃ **Gif Commands**
> \`boy . girl . baby . neon . couple . bff . anime . smoke . cartoon . movies . bokani . man+lady\`

<a:emoji_28:823488482118467614>┃ **Photo Commands**
> \`pboy . pgirl . pcouple . psmoke . pneon . pbaby . panime . pbff . pcartoon . pmovies . pbokani . pman+lady\`

<a:zeko:837426841408110653>┃ **Links**
[support](https://discord.gg/dC8tuEczZb)    -    [invite](https://discord.com/api/oauth2/authorize?client_id=881158768983957545&permissions=8&scope=bot)
`)

   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("#FF0000");
   message.react("<a:like:813847731285393439>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
