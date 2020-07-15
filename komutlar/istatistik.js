const Discord = require("discord.js");
const moment = require("moment");
const os = require('os');
require("moment-duration-format");
exports.run = async (bot, message, args) => {
  const duration = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");

  let msg = message
   const bune = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
   const annencilermaldır = new Discord.RichEmbed()
  .setColor('BLUE')
  .setFooter('GuardMayFe  \'Buyur benim istatistiklerim', bot.user.avatarURL)
  .addField("»**Botun Sahibi**", "<@7074037279123046410>| 𝓐𝓵𝓸𝓷𝓮 𝓖𝓸𝓭 👽 💎#0001  ")
  .addField("»**Geliştirici** ","<707403727912304641>| 𝓐𝓵𝓸𝓷𝓮 𝓖𝓸𝓭 👽 💎#0001 ")
  .addField("»**Bellek kullanımı**", (process.memoryUsage().heapUsed / 512 / 512).toFixed(2) + ' MB', true)  
  .addField("»**Çalışma süresi**", bune)
  .addField('»**Müzik Çalınan Sunucu Sayısı**;', bot.voiceConnections.size)
  .addField('»**Kullanıcılar**:', bot.guilds.reduce((a, b) => a + b.memberCount, 0))
  .addField("»**Sunucular**", bot.guilds.size.toLocaleString(), true)
  .addField("»**Kanallar**", bot.channels.size.toLocaleString(), true)
  .addField("»**Discord.JS sürüm**", "v"+Discord.version, true)
  .addField("»**Node.JS sürüm**", `${process.version}`, true)
  .addField("»**Ping**", bot.ping+" ms", true)
  .addField("»**CPU**", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
  .addField("»**Bit**", `\`${os.arch()}\``, true)
  .addField("»**İşletim Sistemi**", `\`\`${os.platform()}\`\``) 
  .addField("**» Bot Davet**", " [Davet Et](https://discord.com/api/oauth2/authorize?client_id=729401274646134824&permissions=8&redirect_uri=https%3A%2F%2Fdiscord.gg%2FdW5zqFZ&scope=bot7)", )
  .addField("**» Destek Sunucusu**", " [Sunucumuza Katıl](https://discord.gg/d8nPVpx)", )
  .addField("**» Voteleme sayfası**", " [OYLAR MISIN?](https://top.gg/bot/596071936799277116/vote)", )
 return message.channel.send(annencilermaldır);
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [ 'i'],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "Bot i",
  usage: "istatistik"
};