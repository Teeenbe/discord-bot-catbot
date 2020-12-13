const Discord = require("discord.js");
const axios = require("axios");

const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;
const prefix = process.env.PREFIX;

bot.login(TOKEN);

bot.once("ready", () => {
  console.log("Loaded");
  bot.channels.cache
    .get("624628020937883690")
    .send("Running and ready to serve some PETS!");
  bot.user.setActivity("with PETS!");
});

const getPetImage = async (pet) => {
  const res = await axios.get(`https://api.the${pet}api.com/v1/images/search`);
  const { url } = res.data[0];
  return url;
};

bot.on("message", async (msg) => {
  if (!msg.content.startsWith(prefix) || msg.author.bot) {
    return;
  }
  try {
    const args = msg.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();

    if (commandName === "cat" || commandName === "dog") {
      const petImage = await getPetImage(commandName);
      msg.channel.send(petImage);
    }
  } catch (err) {
    console.log(err);
    bot.channels.cache.get("624628020937883690").send(err);
  }
});
