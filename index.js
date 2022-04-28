const Discord = require('discord.js');
const config = require("./config.json")
const fs = require("fs");
const PREFIX = config.Prefix
const Token = config.Token
var axios = require('axios')
var md5 = require('md5');

var Keys = []

var GenKey = function() {
    var premiumHash = Math.floor(Math.random() * 24599999677)
    premiumHash * 1000
    PremiumHasher = (md5(premiumHash));
}

const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const activities = ["robson#1027 is cool!","Azure Ware On Top!"];
const talkedRecently = new Set();
const client = new Discord.Client()
client.on("ready", () => {
    setInterval(() => {
        // generate random number between 1 and list length.
        const randomIndex = Math.floor(Math.random() * (activities.length - 1) + 1);
        const newActivity = activities[randomIndex];

        client.user.setActivity(newActivity);
    }, 10000);
    client.login(config.Token);
    console.log('starting scripts .....')
    console.clear();
    console.log(`ready to go! ${client.user.tag}`)
})




client.on("message", async message => {
    if (message.author.bot) return;
    const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(PREFIX)})\s*`);
    if (!prefixRegex.test(message.content)) return;
    const [, matchedPrefix] = message.content.match(prefixRegex);
    const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();




 

      if (command === "redeemkey") {
        var key = args.join(" ")
        if (!key) return message.reply("i need a key to redeem!")
        if (Keys.includes(key)) {
            let redeem = new Discord.MessageEmbed()
                .setColor('#303434')
                .setDescription(`<:sp_true:965284139869831168> **You have been whitelisted for script!**`)
            message.channel.send(`<@${message.author.id}>`, redeem)
      message.member.roles.add('899319930195968061')
      Keys = Keys.filter(item => item !== key)
          
        } else {
            message.reply("invald key")
        }
    }



     if (command === "genkey") {
            if (!message.member.roles.cache.some((role) => role.id === '934465265016635394')){ 
                const embed = new Discord.MessageEmbed()
                .setColor('#a83232')
                .setAuthor(message.member.user.username, message.member.user.displayAvatarURL())
                .setDescription(`You dont have perm`, false);
                return message.channel.send(embed)
                }
          GenKey()
          Keys.push(`${PremiumHasher}`)
          let premiumplus = new Discord.MessageEmbed()
              .setColor('#303434')
              .setDescription(`Your Whitelist key is: **${PremiumHasher}**`)
          message.channel.send(`<@${message.author.id}>`, premiumplus)
      }
            
      if(command === "purgekeys"){
        if (!message.member.roles.cache.some((role) => role.id === '934465265016635394')){ 
            const embed = new Discord.MessageEmbed()
            .setColor('#a83232')
            .setAuthor(message.member.user.username, message.member.user.displayAvatarURL())
            .setDescription(`You dont have perm`, false);
            return message.channel.send(embed)
            }
        message.reply("All active keys will be purged")
        message.reply("Completed Process!")
        Keys = []
              }

                   if (command === "script") {
                    if (!message.member.roles.cache.some((role) => role.id === '899319930195968061')){ 
                        const embed = new Discord.MessageEmbed()
                        .setColor('#a83232')
                        .setAuthor(message.member.user.username, message.member.user.displayAvatarURL())
                        .setDescription(`You are not on the whitelist`, false);
                        return message.channel.send(embed)
                        }
                         message.reply("Check your dms")
                        let scriptt = new Discord.MessageEmbed()
                        .setTitle("Azure Ware")
                        .setColor('#303434')
                        .setDescription('```lua\nloadstring(game:HttpGet("https://Skiddo-Hub-V3.d4rkm4n3.repl.co/holder/container/azureware.lua"))();\n``` ')
                        message.author.send("" , scriptt)
                       }
                 
        
    })
    client.login(Token);






