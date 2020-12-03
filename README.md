# CatBot - Suits all your Discord cat needs

This is just a fun little bot I wrote in Node.js, using the discord.js library. Hosted on Heroku.

It uses the axios module to send a GET request within Node to https://thecatapi.com/, which returns a URL, amongst other things. The bot listens for `message` events, conditionally calls `getCatImage` if the message matches the command, `|cat`, and then sends its own message containing the URL. Discord then natively displays the image when the URL path leads to an image.

Example:

![Example of usage](https://github.com/Teeenbe/discord-bot-catbot/blob/main/usage-example.png)
