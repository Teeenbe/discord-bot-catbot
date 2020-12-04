const Discord = require("discord.js");
const axios = require("axios");
const bot = new Discord.Client();

bot.login(process.env.TOKEN);

bot.once("ready", () => {
  console.log("Loaded");
  bot.channels.cache
    .get("624628020937883690")
    .send("Running and ready to serve some CATS!");
  bot.user.setActivity("with CATS!");
});

const getCatImage = async () => {
  const res = await axios.get("https://api.thecatapi.com/v1/images/search");
  const { url } = res.data[0];
  return url;
};

bot.on("message", async (msg) => {
  if (msg.content === "|cat") {
    const catImage = await getCatImage();
    msg.channel.send(catImage);
  }
});
