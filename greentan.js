const Discord = require('discord.js')
const bot = new Discord.Client()
const dotenv = require('dotenv')

dotenv.load()

let botToken = process.env.BOT_TOKEN

// Bot startup
bot.on('ready', () => {
  
    bot.user.setGame('Ace of Spades')
    console.log('Time to kill some greenies!')
});

// Prefix for commands
const prefix = "."

// Defaults message => msg
bot.on('message', msg => {
    
    // Keeps bot from spamming itself
    if (msg.author.bot) return
    if (!msg.content.startsWith(prefix)) return

    let command = msg.content.split(" ")[0]
    command = command.slice(prefix.length)

    // Command that sets up the Green role
    if (command === "green") {
        const blueRole = msg.guild.roles.find("name", "Blue")
        const newRole = msg.guild.roles.find("name", "Newfag")
        const greenRole = msg.guild.roles.find("name", "Green")

        // Checks for insufficient permission
        if (msg.member.roles.some(r=>["Owner", "Admin", "Mod", "Dev", "Server Host", "Oldfag", "Newfag"].includes(r.name)) ) {
            msg.member.addRole(greenRole)
            console.log('Someone is now part of the Green team!')
            msg.reply('you are now part of the Green team!  Welcome aboard soldier! :kkonagreen:')
            
            // Removes the Newfag role if they currently have it
            if (msg.member.roles.has(newRole.id)) {
                msg.member.removeRole(newRole)
                console.log('Removed their Newfag role')
            } else {
                return
            }

        // When the member has the Green role already
        } else if (msg.member.roles.has(greenRole.id)) {
            msg.reply("hey numbnuts, you're already part of the Green team :greendab:")
        
        // When the member has the Blue role already
        } else if (msg.member.roles.has(blueRole.id)) {
            msg.reply("listen man, I wish you can be on our team, but you have to let the Owner know first")
        
        // When the member has no role
        } else {
            msg.reply("it seems you can't use this command, try asking the Owner about it")
            return
        
        }

    // Ignore commands // Let bluetan handle these
    } else if (command === "purge") {
        return
    } else if (command === "blue") {
        return
    } else {
        return
    }
});

// Bot token
// Located in .env
bot.login(botToken);