# PetBot - Suits all your Discord pet needs

This is just a fun little bot I wrote in Node.js, using the discord.js library. Hosted on Heroku.

### Usage

Send the message `|cat` or `|dog` in a Discord channel and the bot will send an image of a cat or dog to the same channel, provided it has access.

**Example:**

![Example of usage](https://github.com/Teeenbe/discord-bot-catbot/blob/main/usage-example.png)

### How

It uses the axios module to send a GET request within Node to [TheCatAPI](https://thecatapi.com/) or [TheDogAPI](https://thedogapi.com/), which returns a URL, amongst other things. The bot listens for `message` events, conditionally calls `getPetImage` if the message matches the command, `|cat` or `|dog`, and then sends its own message containing the URL, which Discord natively displays as an image.
