const { EmbedBuilder } = require("discord.js")

module.exports = {
    name: "help",
    aliases: ["h"],
    cooldown: 5,


    

    run: async(Client, Message, Args) => {
    const Prefix = Client.Prefix
    const Embed = new EmbedBuilder()
    .setAuthor({ name: Message.author.displayName, iconURL: Message.author.displayAvatarURL()})
    .setColor('Random').setFooter({ text: Message.author.displayName, iconURL: Message.author.displayAvatarURL()})
    .setThumbnail(Message.author.displayAvatarURL()).setTitle('Help Commands').setFields(
        { name: `/set-channel`, value: `وضع روم الاذكار`, inline: true },
        { name: `/delete-channel`, value: `حذف روم الاذكار`, inline: true },
        { name: `${Prefix}help`, value: `رؤيه جميع اوامر البوت`, inline: true },
        { name: `${Prefix}set-username`, value: `تغيير اسم البوت`, inline: true },
        { name: `${Prefix}set-avatar`, value: `تغيير افتار البوت`, inline: true },
        { name: `${Prefix}set-status`, value: `تغيير حالة البوت`, inline: true },
    )
    Message.reply({ embeds: [Embed] })
    }
}