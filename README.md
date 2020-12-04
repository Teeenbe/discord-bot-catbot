# CatBot - Suits all your Discord cat needs

This is just a fun little bot I wrote in Node.js, using the discord.js library. Hosted on Heroku.

### Usage
Send the message `|cat` in a Discord channel and the bot will send an image of a cat to the same channel, provided it has access.

**Example:**

![Example of usage](https://github.com/Teeenbe/discord-bot-catbot/blob/main/usage-example.png)

### How
It uses the axios module to send a GET request within Node to https://thecatapi.com/, which returns a URL, amongst other things. The bot listens for `message` events, conditionally calls `getCatImage` if the message matches the command, `|cat`, and then sends its own message containing the URL, which Discord natively displays as an image.
