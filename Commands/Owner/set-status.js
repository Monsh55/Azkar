const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const { Database } = require('st.db')
const st = new Database('DataBots/Status')
module.exports = {
    name: 'set-status',
    cooldown: 10,




    run: async( Client, Message, Args ) => {
     const activity = Message.content.split(' ').slice(1).join(' ')
     const Owner = Client.Owner

     if (!Owner.includes(Message.author.id)) return;
     if (!activity) return Message.reply({ content: `Please add activity`})
     Client.user.setActivity(activity)
     st.set(`Activity_${Client.user.id}`, activity)
     const Row = new ActionRowBuilder()
     .addComponents(
        new ButtonBuilder().setCustomId('idle').setLabel('idle').setEmoji('1100424424882188388').setStyle(ButtonStyle.Secondary),
        new ButtonBuilder().setCustomId('online').setLabel('online').setEmoji('1083437442754937013').setStyle(ButtonStyle.Secondary),
        new ButtonBuilder().setCustomId('dnd').setLabel('dnd').setEmoji('863692244422098974').setStyle(ButtonStyle.Secondary))
        Message.reply({ components: [Row]})
    
  }
}