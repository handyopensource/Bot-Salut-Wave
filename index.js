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
  if (message.content.includes('https://'||'http://'||'www.'||'.fr'||'.be'||'.com'||'.uk'||'.de' ||'.org')) {
    list.members.cache.forEach(member => {
     if (member.roles.cache.some(role => role.name === 'Administrateur' || 'Suppléant-Admin' || '**Moderateur**')) {
        member.send(message.author.username + ' a envoyé ce message ***'  + message.content + '*** sur le salon ' + message.channel.name);
     }
   });
  }
});

client.login(process.env.Token);
