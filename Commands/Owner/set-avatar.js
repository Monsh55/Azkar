const { EmbedBuilder } = require("discord.js")

module.exports = {
    name: "set-avatar",


    run: async( Client, Message, Args ) => {
    const Owner = Client.Owner
    if (Owner !== Message.author.id) return;
    const NewAvatar = Args[0]
    if (NewAvatar) {
        Client.user.setAvatar(NewAvatar)
        Message.reply({ content: `**تم تغيير صوره البوت الخاص بك \`${NewAvatar}\` بنجاح :white_check_mark:**`})
     } else {
        Message.reply({ content: `**قم بوضع صوره البوت الجديده :x:**`})
     }
    }
}