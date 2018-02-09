const Discord = require('discord.js')
const bot = new Discord.Client()
const dotenv = require('dotenv')

dotenv.load()

let botToken = process.env.BOT_TOKEN

// Bot startup
bot.on('ready', () => {
  
  bot.user.setActivity('Blue Tower Defense')
  console.log('Time to kill some tunnel rats!')
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
  
    // Command for posting random greentan memes
    if (command === "meme") {
      // 20 memes
      const greenMemes = [
        
          'https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1512302280667.png?1517966183605', 
          'https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1512318889692.png?1517966183617',
          'https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1485918568651.png?1517966183654',
          'https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1499049725183.png?1517966183777',
          'https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1485918704868.png?1517966183966',
          'https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1511486328167.png?1517966183973',
          'https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1512301223711.png?1517966184339',
          'https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1512344216265.jpg?1517966184638',
          'https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1499048803126.jpg?1517966184867',
          'https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1506747569766.jpg?1517966185861',
          'https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1506745956728.png?1517966186488',
          'https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1485919537209.png?1517966186773',
          'https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1485915657854.jpg?1517966188365',
          'https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1511475842290.png?1517966188482',
          'https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1499048634908.png?1517966190871',
          'https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2Fautistic_screeching.png?1517966193228',
          'https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1506743255261.jpg?1517966193482',
          'https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1506750051951.png?1517966195270',
          'https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1485917328869.png?1517966202079',
          'https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2Fconstantinople.png?1517966202266'];

      var randMeme = greenMemes[Math.floor(Math.random() * greenMemes.length)];
      msg.channel.send({embed: {
        image: {
        url : randMeme
        }
      }});
}

    // Command that sets up the Green role
    if (command === "green") {
        const blueRole = msg.guild.roles.find("name", "Blue")
        const newRole = msg.guild.roles.find("name", "Newfag")
        const greenRole = msg.guild.roles.find("name", "Green")

        // Checks for insufficient permission
        if (msg.member.roles.some(r=>["Owner", "Admin", "Mod", "Dev", "Server Host", "Oldfag", "Newfag"].includes(r.name)) ) {
          msg.member.addRole(greenRole)
          console.log('Someone is now part of the Green team!')
          msg.reply('you are now part of the Green team!  Welcome aboard soldier! <:kkonagreen:387280493256900618>')
          
            // Removes the Newfag role if they currently have it
            if (msg.member.roles.has(newRole.id)) {
              msg.member.removeRole(newRole)
              console.log('Removed their Newfag role')
              
            } else {
              return
            }

        // When the member has the Green role already
        } else if (msg.member.roles.has(greenRole.id)) {
            msg.reply("hey numbnuts, you're already part of the Green team <:greendab:386360094104748033>")
        
        // When the member has the Blue role already
        } else if (msg.member.roles.has(blueRole.id)) {
            msg.reply("listen man, I wish you can be on our team, but you have to let the Owner know first")
        
        // When the member has no role
        } else {
            msg.reply("it seems you can't use this command, try asking the Owner about the issue")
            return
        }

    // Ignore commands // Let bluetan handle these
    } else if (command === "blue") {
        return
    } else if (command === "purge") {
        return
    } else {
        return
    }
});

// Adds new members to the Newfag role
bot.on('guildMemberAdd', (member) => {

  const role = member.guild.roles.find("name", "Newfag")
  
  member.addRole(role)
  console.log(' A new user has joined your Discord server! \o/ ')
});

// Keeps the bot from shutting down
const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

// Bot token
// Located in .env
bot.login(botToken);