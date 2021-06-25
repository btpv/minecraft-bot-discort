const fs = require('fs');
const rulesf = require('../data/rules.json');
module.exports = {
    name: 'rules',
    description: 'show the rules',
    execute(message, args, Discord, client, myutil, setting) {
        server = message.guild.id
        const rules = rulesf[server]
        if (rules != null) {
            const embed = new Discord.MessageEmbed()
                .setColor('#BFCDEB')
                .setTitle('rules')
            for (var i in rules) {
                var value = rules[i];
                console.log(`index: ${i}\t value: ${value}`);
                embed.addFields({ name: `rule ${i}`, value: value })
            }
            message.channel.send(embed);

        } else {
            message.channel.send("no rules its a anarchy servers")
        }
        console.log(server)
    }
}