const { Client, GatewayIntentBits, Collection, EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');
  const client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.GuildMembers,
      GatewayIntentBits.MessageContent,
      GatewayIntentBits.GuildPresences
    ]  
  });
//  process.on("uncaughtException", (err, origin) => { return; })
//  process.on('uncaughtExceptionMonitor', (err, origin) => { return; });
//  process.on("unhandledRejection", (err, promise) => { return; })
//  process.on('multipleResolves', (type, promise, reason) => { return; });
  client.Çɱɗ = new Collection()
  client.Çʍɗ = new Collection()
  client.Prefix = '+'
  client.Owner = '832761264542449695'
  const fs = require('fs')
  fs.readdirSync(`${process.cwd()}/Handler/`).forEach((Handler) => {
      require(`${process.cwd()}/Handler/${Handler}`)(client)
  })
  
  client.login("MTAyNzYxMjI5ODAxNTE2MjM4MA.GZGF-m.uMYx4EPZR4Tr5m22wt3VvDoHC0AcHYym9T6OjI")