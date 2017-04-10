const Discord = require('discord.js');
const bot = new Discord.Client();

var onlinelol = true;

function CommandIs(string,msg)
{
	return msg.content.startsWith('!'+string);
}

function pluck(array)
{
	return array.map(function(item){return item['name'];});
}

function hasRole(member, role)
{
	if (pluck(member.roles).includes(role))
	{
		return true;
	}
	else
	{
		return false;
	}
}

bot.on('message', (message) => 
{
	if (onlinelol == true)
	{
		if (message.content.toLowerCase() == 'hey bot' && onlinelol == true)
		{
			message.channel.sendMessage('Hello, '+message.author.username);
		}

		if (CommandIs('shutdown', message))
		{	
			if (hasRole(message.member, Owner) == true)
			{
				message.channel.sendMessage('Disconnecting...');
				onlinelol = false;
			}
			else
			{
				message.channel.sendMessage('Insufficient Permissions. You must be Owner to use this command. Sorry '+message.author.username+'.');
			}
		}
	}
	
	if (CommandIs('activate',message) && onlinelol == false)
	{
		if (hasRole(message.member, Owner) == true)
		{
			message.channel.sendMessage('bot is now online.');
			onlinelol = true;
		}
		else
		{
			message.channel.sendMessage('Insufficient Permissions. You must be Owner to use this command. Sorry '+message.author.username+'.');
		}
	}
	
	if (CommandIs('say',message) && onlinelol == false)
	{
		if (hasRole(message.member, Owner) == true)
		{
			message.channel.sendMessage('bot is now online.');
			onlinelol = true;
		}
		else
		{
			message.channel.sendMessage('Insufficient Permissions. You must be Owner to use this command. Sorry '+message.author.username+'.');
		}
	}
	
});

bot.login('MzAwODA5ODI2MTY0ODAxNTM5.C8x4lA.d4aQRLkdySz2JiXcz7CesMkCb34');