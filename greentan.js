const Discord = require("discord.js");
const bot = new Discord.Client();
const dotenv = require("dotenv");

dotenv.config();

let botToken = process.env.BOT_TOKEN;

const greenMemes = [
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1512302280667.png?1517966183605",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1512318889692.png?1517966183617",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1485918568651.png?1517966183654",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1499049725183.png?1517966183777",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1485918704868.png?1517966183966",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1511486328167.png?1517966183973",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1512301223711.png?1517966184339",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1512344216265.jpg?1517966184638",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1499048803126.jpg?1517966184867",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1506747569766.jpg?1517966185861",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1506745956728.png?1517966186488",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1485919537209.png?1517966186773",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1485915657854.jpg?1517966188365",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1511475842290.png?1517966188482",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1499048634908.png?1517966190871",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2Fautistic_screeching.png?1517966193228",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1506743255261.jpg?1517966193482",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1506750051951.png?1517966195270",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1485917328869.png?1517966202079",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2Fconstantinople.png?1517966202266",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1577301977219.png?v=1577553185787",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1506749012466.jpg?v=1589562686435",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1588999548091.png?v=1589562702156",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2FDeuce.png?v=1589562705821",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1588997855560.gif?v=1589562724252",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2FEEEH_SMG.png?v=1589562736509",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1499055135127.png?v=1589562775517",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1506746348119.png?v=1589562863411",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1588996681691.png?v=1589562972645",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1506743753835.jpg?v=1589563044976",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1506749710219.png?v=1589563086492",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1506750701261.png?v=1589563104934",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1512344092820.png?v=1589563200619",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1589399417027.png?v=1589853851273",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1589381978193.png?v=1589853851288",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1589384888011.png?v=1589853851531",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1589382283043.jpg?v=1589853851788",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1589862956269.png?v=1589863047050",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1506745783365.jpg?v=1589865893690",
        "https://cdn.glitch.com/47637b22-ee5d-45dd-a2e3-7c043f29a51b%2F1589402969073.png?v=1589865894199"
      ];
// Bot startup
bot.on("ready", () => {
  bot.user.setActivity("Blue Tower Defense");
  console.log("Time to kill some tunnel rats!");
});

// Prefix for commands
const prefix = ".";

// Defaults message => msg
bot.on("message", msg => {
  // Keeps bot from spamming itself
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;

  const args = msg.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();
  
  const member = msg.mentions.members.first();
  const blueRole = msg.guild.roles.cache.find(roles => roles.name === "Blue");
  const newRole = msg.guild.roles.cache.find(roles => roles.name === "Newfag");
  const greenRole = msg.guild.roles.cache.find(roles => roles.name === "Green");
  let listVals = greenMemes.length;
  
  // Command for posting random greentan memes
  if (command === "meme") {
    if (msg.member.roles.cache.some(role => role.name === ("Green"))) {
      var randMeme = greenMemes[Math.floor(Math.random() * greenMemes.length)];
      msg.channel.send({
        embed: {
          image: {
            url: randMeme
          }
        }
      });
    }
    return;
  }
  
  // Command that sets up the Green role
  if (command === "green") {
    if (msg.channel.id === "712500246931963915") {
      // Checks for insufficient permission
      if (
        member.roles.cache.some(role => role.name ===
          [
            "Owner",
            "Admin",
            "Mod",
            "Dev",
            "Server Host",
            "Oldfag",
            "Newfag"
          ]
        )
      ) {
        member.roles.add(greenRole);
        console.log("Someone is now part of the Green team!");
        msg.reply(
          "you are now part of the Green team!  Welcome aboard soldier! <:kkonagreen:387280493256900618>"
        );

        // When the member has the Green role already
      } else if (msg.member.roles.has(role => role.name === 'Green' || greenRole)) {
        msg.reply(
          "hey numbnuts, you're already part of the Green team <:greendab:386360094104748033>"
        );
        msg.delete({timeout: 5000});

        // When the member has the Blue role already
      } else if (member.roles.has(role => role.name === 'Blue' || blueRole)) {
        msg.reply(
          "listen man, I wish you can be on our team, but you have to let the Owner know first"
        );
        msg.delete({timeout: 5000});
        
        // When the member has no role
      } else {
        msg.member.roles.add(newRole);
        msg.reply(
          "it seems you did not have the Newfag role, here I'll give you one"
        );
        return;
      }
      // #bot-testing
    }
    return;
  };
  
  if (command === "list") {
    } else if (member.roles.has(role => role.name === 'Green' || greenRole)) {
        msg.author.send(
      "There is a total of " +
        "`" +
        listVals +
        "`" +
        " memes relating to greens"
    );

        // When the member has the Green role already
      } else if (member.roles.has(role => role.name === 'Blue' || blueRole)) {
       return;
  };
});

// Keeps the bot from shutting down
const http = require("http");
const express = require("express");
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
