const { EmbedBuilder, Client } = require('discord.js')
const db = require('pro.db')
module.exports = {
    name: 'set-channel',
    description: 'اختيار روم الاذكار',
    options: [
        {
            name: 'channel',
            description: 'روم الاذكار',
            type: 7,
            required: true
        },
        {
            name: 'time',
            description: 'وقت الاذكار مثل , / 5m , 1h, 2h, defult 20m' ,
            type: 3,
            required: false,
        }
    ],

    run: async (client, interaction, args) => {
    const Channel = interaction.options.getChannel('channel')
    const Time = interaction.options.getString('time')
    if (interaction.member.permissions.has('Administrator')) {
    db.set(`Azkar_${client.user.id}`, { Channel: Channel.id, Time: `${Time || '20m'}`})
    interaction.reply({embeds: [new EmbedBuilder().setDescription(`تم اضافة الروم الاذكار بنجاح :white_check_mark:`)], components: []})
    }}
}