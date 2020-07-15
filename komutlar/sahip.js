const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let serverembed = new Discord.RichEmbed()
    .setDescription("**:chicken: Sahip komutları**")
    .setColor("#15f153")
    .addField("<:BugHunter:732699567723642922> Yapımcım", "<@707403727912304641>")
    .addField("Id", "707403727912304641")
    .addField("Botları", "Losy Bot , Losy Guard")
    message.channel.send(serverembed);
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["slowmode" ,"yavaş mod"],
  permLevel: 0
};

exports.help = {
  name: 'sahip',
  description: 'Bütün sahip komutlarını verir.',
  usage: 'sahip'
};
