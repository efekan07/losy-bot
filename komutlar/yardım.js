const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '-'
let yardım = new Discord.RichEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL)
.setColor('BLUE')
.addField('Losy Bot Yardım Menüsü <a:discordload:730795039441027132>',`
**<a:elmas:731028479520407583>  ${prefix}avatar** : __Kendi Avatarınızı Gösterir__
**<a:partner:731028079081816114>  ${prefix}moderasyon** : __Moderasyon Komutlarını Gösterir__
**<:cgenboost:731027248869801984>  ${prefix}oyun-ara** : __Steam'den İstediğiniz Bir Oyunu Arar__
**<a:nitroo:731027250874548304>  ${prefix}reklam-taraması** : __En Gelişmiş Reklam Tarama__ 
**<a:pepee:731027250815959090>  ${prefix}şifre** : __Bir Şifre Oluşturur__
**<a:boost:730778752883228672>  ${prefix}sil** : __Sunucudan İstediğiniz Kadar Mesaj Siler__
**<:devemoji:730881267553534003>  ${prefix}rol-koruma** : __Rol Koruma Sistemini Açar__
**<a:yan:730778015948079185>  ${prefix}ping** : __Ping Durumunu Gösterir__`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
.addField('Linkler:',` [Botu Davet Et](https://discord.com/api/oauth2/authorize?client_id=729401274646134824&permissions=8&redirect_uri=https%3A%2F%2Fdiscord.gg%2FdW5zqFZ&scope=bot) |   [Oy Ver](https://top.gg/bot/729401274646134824) |  [Youtube](https://www.youtube.com/channel/UCTtGw9pc9F7hPRl5bvfnfbA) |  [Codex](https://discord.gg/zcTsySw)`)
.setImage(`https://cdn.discordapp.com/attachments/732231107428483172/732974766914404425/codexs_sponsor.png`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: true, 
  aliases: ["help"], 
  permLevel: 0
};
exports.help = {
  name: 'yardım'
};
