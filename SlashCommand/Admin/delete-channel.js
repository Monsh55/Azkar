const { EmbedBuilder } = require('discord.js')
const db = require('pro.db')

module.exports = {
    name: 'delete-channel',
    description: 'اختيار روم الاذكار',


    run: async (client, interaction, args) => {
    if (interaction.member.permissions.has('Administrator')) {
    if (!db.get(`Azkar_${client.user.id}`)) return interaction.reply({ content: `لا يوجد روم اذكار داخل الداتا`})
    db.delete(`Azkar_${client.user.id}`)
    interaction.reply({embeds: [new EmbedBuilder().setDescription(`تم حذف الروم الاذكار بنجاح :white_check_mark:`)], components: []})
    }}
}