const util = require('minecraft-server-util');

module.exports = {
    name: 'mcserver',
    description: 'get information about a minecraft server',
    execute(message, args, Discord, client, myutil, setting) {
        // if (!args[0]) return message.channel.send('Please enter a minecraft server ip');
        // if (!args[1]) return message.channel.send('Please enter a minecraft server port');
        if (!args[0]) args[0] = setting.server_address.default_ip
        if (!args[1]) args[1] = setting.server_address.default_port
        util.status(args[0], { port: parseInt(args[1]) }).then((response) => {
            console.group("response")
            console.log(response)
            console.groupEnd();
            const embed = new Discord.MessageEmbed()
                .setColor('#BFCDEB')
                .setTitle('Mc server status')
                .setImage("https://eu.mc-api.net/v3/server/favicon/" + args[0])
                .addFields(
                    { name: 'Server IP', value: response.host },
                    { name: 'description', value: myutil.rmMCfc(response.description.descriptionText).replace("||", "|\\|") },
                    { name: 'Online Players', value: response.onlinePlayers },
                    { name: 'Max Players', value: response.maxPlayers },
                    { name: 'Version', value: myutil.rmMCfc(response.version) },
                )

            message.channel.send(embed);
        })
            .catch((error) => {
                message.channel.send('there was an error finding this server');
                throw error;
            })
    }
}