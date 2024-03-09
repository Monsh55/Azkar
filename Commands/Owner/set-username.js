const { EmbedBuilder } = require("discord.js")

module.exports = {
    name: "set-username",


    run: async( Client, Message, Args ) => {
    const Owner = Client.Owner
    if (Owner !== Message.author.id) return;
        const Newusername = Message.content.split(' ').slice(1).join(' ')

    if (Newusername) {
        Client.user.setUsername(Newusername)
        Message.reply({ content: `**تم تغيير صوره البوت الخاص بك \`${Newusername}\` بنجاح :white_check_mark:**`})
     } else {
        Message.reply({ content: `**قم بوضع صوره البوت الجديده :x:**`})
     }
    }
}