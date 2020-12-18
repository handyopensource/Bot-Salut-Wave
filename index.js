const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
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
    list.members.cache.forEach(member => {
     if (member.roles.cache.some(role => role.name === 'Administrateur')) {
        member.send(message.author.username + ' a envoyé ce message ***'  + message.content + '*** sur le salon ' + message.channel.name);
     } else if (member.roles.cache.some(role => role.name ==='Suppléant-Admin')) {
        member.send(message.author.username + ' a envoyé ce message ***'  + message.content + '*** sur le salon ' + message.channel.name);
     } else if (member.roles.cache.some(role => role.name ==='**Moderateur**')) {
        member.send(message.author.username + ' a envoyé ce message ***'  + message.content + '*** sur le salon ' + message.channel.name);
     }
   });
  }
});

client.login(process.env.Token);
