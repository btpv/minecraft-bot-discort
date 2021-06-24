module.exports = {
    name: 'uptime',
    description: 'readyup name',
    execute(message, args, Discord, client) {
        uptime = client.uptime;
        if (uptime <= 60000) {
            message.channel.send(`uptime: ${(uptime/1000).toFixed(2)}s`);
        } else if (uptime <= 3600000) {
            message.channel.send(`uptime: ${(uptime/60000).toFixed(2)}m`);
        } else if (uptime <= 86400000) {
            message.channel.send(`uptime: ${(uptime/3600000).toFixed(2)}u`);
        } else if (uptime <= 604800016.56){
            message.channel.send(`uptime: ${(uptime/86400000).toFixed(2)}dag`);
        } else if (uptime <= 2629800000){
            message.channel.send(`uptime: ${(uptime/604800016.56).toFixed(2)}week`);
        }else if (uptime <= 31557600000){
            message.channel.send(`uptime: ${(uptime/2629800000).toFixed(2)}maand`);
        } else {
            message.channel.send(`uptime: ${(uptime/31557600000).toFixed(2)}jaar`);
        }
    }
}