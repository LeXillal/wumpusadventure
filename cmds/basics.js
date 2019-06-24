const Discord = require("discord.js")

async function ping(ctx) {
  const m = await ctx.send(`pinging...`)
  const ms = m.createdTimestamp - ctx.message.createdTimestamp

  const pingEmbed = new Discord.RichEmbed()
  .setAuthor("Latency", ctx.bot.user.displayAvatarURL)
  .setColor(ctx.cfg.embed.color)
  .addField("Ping", "The bot got a latency of `" + ms + "` ms")
  .setFooter(ctx.cfg.embed.footer)

  await m.edit(pingEmbed)
}
