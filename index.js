const Discord = require('discord.js')
const bot = new Discord.Client()
const dotenv = require('dotenv');

// Grabs the BOT_TOKEN from process.env
dotenv.load()

let allowedRoles = process.env.ALLOWED_ROLES.split(',')
let botToken = process.env.BOT_TOKEN

//Allowed roles from => process.env
let allowedString = ''
allowedRoles.forEach((role) => {
  allowedString = allowedString.concat('* ' + role + '\n')
})

bot.on('message', msg => {
  // Set prefix
  let prefix = "."

  if (msg.author.bot) return
  if (!msg.content.startsWith(prefix)) return

  if (msg.content.startsWith(prefix + 'role')) {
    if (msg.member.roles.some(r=>["Owner", "Admin", "Mod", "Dev", "Server Host", "Oldfag", "Newfag"].includes(r.name)) ) {


    // Get args
    let args = msg.content.split(" ");

    if (args.length < 2 || args[1] == '-help') {
      msg.channel.sendMessage('These are the roles you\'re allowed to join: \n'+
        allowedString +
        '\nuse ".role `<role_name>` to join a role')
      return
    }

    // Get the role
    let role = msg.guild.roles.find("name", args[1].toLowerCase());

    // Checks for errors after args
    if (!role || role === null) {
      msg.channel.sendMessage('Could not find a role by that name.')
      return
    }

    // Checks for errors after args
    else if (allowedRoles.indexOf(role.name) === -1) {
      msg.channel.sendMessage('Doesn\'t look like you\'re allowed to join that group. \nFor a list of allowed roles type `.role -help`')
      return
    }
      
    msg.member.addRole(role);
    msg.channel.sendMessage('You\'ve been added to: ' + role.name + ' Welcome to the army soldier!')

    return
    } else {
        msg.reply("it looks like you don't have the right to do that");
    }
  }
})

bot.on("guildMemberAdd", member => {
    console.log(`New User "${member.user.username}" has joined "${member.guild.name}"` );
})

bot.on('ready', () => {
  bot.user.setGame('Ace of Spades 0.54');
  console.log(`Ready to set roles in ${bot.channels.size} channels on ${bot.guilds.size} servers, for a total of ${bot.users.size} users.`)
})

bot.on('error', e => { console.error(e) })

bot.login(botToken)