# CatBot - Suits all your Discord cat needs

This is just a fun little bot I wrote in Node.js, using the discord.js library.

It uses the axios module to send a GET request within Node to https://thecatapi.com/, which returns a URL, amongst other things. The bot listens for `message` events and conditionally calls `getCatImage` if the message matches the command: `|cat`.
