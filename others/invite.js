const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);

module.exports = {
  name: `invite`,
  description: `Gives you an invite`,
  aliases: ["add"],
  cooldown: 3,
  edesc: "Type this command to get an invite link for the Bot, thanks for every Invite",
  execute(message, args, client) {
    //react with approve emoji
    message.react("<a:emoji_18:818844275750993940>");
    //send the invite embed
    message.reply(new MessageEmbed().setColor("#FF0000").setTitle("").setDescription("<a:zeko:837426841408110653> **[Click Here](https://discord.com/api/oauth2/authorize?client_id=841788647014531073&permissions=8&scope=bot) to invite the bot.**")
    .setFooter(""));
  }
}
