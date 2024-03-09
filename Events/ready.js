const { EmbedBuilder } = require('discord.js')
const { Database } = require('st.db')
const db = new Database('DataBots/Status')
const ms = require('ms')
module.exports = async Client => {
const Status = db.get(`SS_${Client.user.id}`)
const Activity = db.get(`Activity_${Client.user.id}`)
if (Activity) {
Client.user.setActivity(`${Activity || 'Almasa'}`)
}
if (Status === 'idle') {
    Client.user.setStatus('idle')
} else if (Status === 'dnd') {
    Client.user.setStatus('dnd')
}
const DATA = require('../azkar.json')
const data = require('pro.db')
const Data = data.get(`Azkar_${Client.user.id}`)
setInterval(() => {
if (data.has(`Azkar_${Client.user.id}`)) {
    const randomIndex = Math.floor(Math.random() * DATA.length); // يختار عنصرًا عشوائيًا من المصفوفة
    const randomAzkar = DATA[randomIndex]; 
    const Embed = new EmbedBuilder()
    .setTitle(randomAzkar[0])
    .setDescription(randomAzkar[1]);
Client.channels.cache.get(Data?.Channel)?.send({ embeds: [Embed]})
}}, ms(`${Data?.Time}`) || '1m')
}
