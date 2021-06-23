module.exports = {
    name: 'readyup',
    description: 'readyup name',
    execute(message,args){
        let role = message.guild.roles.cache.find(r => r.name === "ready");
        console.log(role);
        message.member.roles.add(role);
         message.channel.send(`${message.member}\n${message}!!!`);
    }
}
// '850775540955611146'