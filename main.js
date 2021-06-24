const myutil = require('./function');
const Discord = require('discord.js');
const setting = require('./settings.json');
const client = new Discord.Client();
const prefix = '-';
const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = new fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}
client.once('ready', () => {
    console.log('online');
});
client.on('message', message => {
    console.log(message.author.username + " : " + message.content);
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase();
    if (client.commands.get(command) != null) {
        client.commands.get(command).execute(message, args, Discord, client, myutil, setting);
    }
});
client.login(setting.token);
