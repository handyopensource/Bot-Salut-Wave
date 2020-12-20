const Discord = require('discord.js');
const client = new Discord.Client();
list_new_user = [];

client.once('ready', () => {
	console.log('Ready!');
});

function EnvoiMessageAdmin(messageToAdmin){
    const list = client.guilds.cache.get("472687107530555402");
    list.members.cache.forEach(member => {
        if (member.roles.cache.some(role => role.name === 'Administrateur')) {
           member.send(messageToAdmin);
        } else if (member.roles.cache.some(role => role.name ==='Suppléant-Admin')) {
           member.send(messageToAdmin);
        } else if (member.roles.cache.some(role => role.name ==='**Moderateur**')) {
           member.send(messageToAdmin);
        }
      });
}

client.on('guildMemberAdd', member => {
    heure_message = 24 * 3600 * 1000;
    new_user = member.user.username;
    list_new_user.push(new_user);
    setTimeout(function (){
        message_to_send =  list_new_user[0] + " est arrivé sur le serveur depuis 24h merci de bien vouloir vérifier s'il s'est présenté dans le channel présentation !";
        EnvoiMessageAdmin(message_to_send);
        list_new_user.splice(0, 1);
    }, heure_message)
});

client.on('message', message => {
    if (
      message.content.toLowerCase().startsWith("hello") ||
      message.content.toLowerCase().startsWith("bonjour") ||
      message.content.toLowerCase().startsWith("bonsoir") ||
      message.content.toLowerCase().startsWith("coucou") ||
      message.content.toLowerCase().startsWith("hey") ||
      message.content.toLowerCase().startsWith("salut")
    ) {
      message.react('👋');
    }
    const list = client.guilds.cache.get("472687107530555402");

    if (message.author.id !== "777238000316055553" && (message.content.includes('https://') || message.content.includes('http://') || message.content.includes('www.') || message.content.includes('.fr') || message.content.includes('.be') || message.content.includes('.com') || message.content.includes('.uk') || message.content.includes('.de') || message.content.includes('.org'))) {
      message_to_send = message.author.username + ' a envoyé ce message ***'  + message.content + '*** sur le salon ' + message.channel.name;
      EnvoiMessageAdmin(message_to_send);
    }

});

client.login(process.env.Token);
