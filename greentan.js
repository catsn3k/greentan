const Discord = require('discord.js');
const bot = new Discord.Client();
const dotenv = require('dotenv');

dotenv.config();

let botToken = process.env.BOT_TOKEN;

// Bot startup
bot.on('ready', () => {
  
  bot.user.setActivity('Blue Tower Defense');
  console.log('Time to kill some tunnel rats!');
});

// Prefix for commands
const prefix = ".";

// Defaults message => msg
bot.on('message', (msg) => {
    
    if (!msg.content.startsWith(prefix) || msg.author.bot) return;

    const args = msg.content.slice(prefix.length).split(' ');
    const command = args.shift().toLowerCase();
    
    const greenMemes = [
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1506745783365.jpg?v=1590025764220",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1588997855560.gif?v=1590025764499",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1512301223711.png?v=1590025764678",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1512302280667.png?v=1590025764781",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1512344092820.png?v=1590025764829",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1512318889692.png?v=1590025765062",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1511475842290.png?v=1590025765278",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1511486328167.png?v=1590025765479",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2FDeuce.png?v=1590025765711",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1523158097445.jpg?v=1590025765916",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1512344216265.jpg?v=1590025766149",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1506749012466.jpg?v=1590025766428",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1506747569766.jpg?v=1590025766686",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1506745956728.png?v=1590025766869",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1506743753835.jpg?v=1590025767076",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1499048803126.jpg?v=1590025767326",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1499048634908.png?v=1590025767528",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1485919537209.png?v=1590025767850",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1589384888011.png?v=1590025768024",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1588999548091.png?v=1590025768207",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1506743255261.jpg?v=1590025768541",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1485915657854.jpg?v=1590025768689",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1589862956269.png?v=1590025768912",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1589402969073.png?v=1590025769535",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1506746348119.png?v=1590025770007",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1589382283043.jpg?v=1590025771003",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2Fautistic_screeching.png?v=1590025771022",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1506750051951.png?v=1590025771040",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1499055135127.png?v=1590025771456",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1485918568651.png?v=1590025771777",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1485918704868.png?v=1590025771804",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1589399417027.png?v=1590025771987",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1589381978193.png?v=1590025772049",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1499049725183.png?v=1590025772756",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1485917328869.png?v=1590025772781",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1506749710219.png?v=1590025772816",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1506750701261.png?v=1590025773478",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1588996681691.png?v=1590025775879",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2Fconstantinople.png?v=1590025776027",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2FEEEH_SMG.png?v=1590025778893"];
  
    // Command for posting random greentan memes
    if (command === "meme") {
      if (msg.guild.roles.cache.some(role => role.name === 'Green')) {
      var randMeme = greenMemes[Math.floor(Math.random() * greenMemes.length)];
      msg.channel.send({embed: {
        image: {
        url : randMeme
        }
      }});
    } return;
  };

    const blueRole = msg.guild.roles.cache.find(role => role.name === 'Blue');
    const newRole = msg.guild.roles.cache.find(role => role.name === 'Newfag');
    const greenRole = msg.guild.roles.cache.find(role => role.name === 'Green');
    //const selfChannel = member.guild.channels.get('self-cahnnel', 'bot-testing');
  
    // Command that sets up the Green role
    if (command === "green") {
        if (msg.channel.id === '712502613022605322' || '390758129274454018') {
          // Checks for insufficient permission
          if (msg.member.roles.cache.some(role => role.name === "Newfag", "Owner", "Admin", "Mod", "Dev", "Server Host", "Oldfag")) {
            msg.member.roles.add(greenRole).catch(console.error);
            msg.member.roles.remove(newRole).catch(console.error);
            console.log('Someone is now part of the Green team!');
            msg.reply('you are now part of the Green team!  Welcome aboard soldier! <:kkonagreen:387280493256900618>');
            

          // When the member has the Green role already
          } else if (msg.guild.roles.cache.has(greenRole)) {
              msg.reply("hey numbnuts, you're already part of the Green team <:greendab:386360094104748033>");

          // When the member has the Blue role already
          } else if (msg.guild.roles.cache.has(blueRole)) {
              msg.reply("listen man, I wish you can be on our team, but you have to let the Owner know first");

          // When the member has no role
          } else {
              msg.reply("it seems you can't use this command, try asking the Owner about the issue");
              return;
          }
      // #bot-testing
      } return;
  };
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

// Is this bot still in service?