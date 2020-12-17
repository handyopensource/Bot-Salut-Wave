const Discord = require('discord.js');
const client = new Discord.Client();
const list = client.guilds.get("472687107530555402");

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
  
/**
  if (message.content.includes('https://'||'http://'||'www.'||'.fr'||'.be'||'.com'||'.uk'||'.de')) {
    list.members.forEach(member => {
     if (member.roles.some(role => role.name === 'Administrateur' || 'Suppléant-Admin' || '**Moderateur**')) {
        member.send('${message}');
     }
  });  
  }
**/
});

client.login(process.env.Token);
