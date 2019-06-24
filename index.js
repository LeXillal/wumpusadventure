// Authors: @dannyhpy, @julien038bify //
const YAML = require('js-yaml')
const fs   = require('fs')
const { ShardingManager } = require('discord.js')

require('colors')

console.log("-------------------".red)
console.log("| ".red+"WumpusFightClub ".green+"|".red)
console.log("-------------------".red)

const cfg     = YAML.safeLoad(fs.readFileSync('./settings.yml'))
const manager = new ShardingManager('./child.js', { token: cfg.discord.token })

manager.spawn().catch(console.error)

manager.on('launch', (shard) => {
    console.log(`○ SHARD ${shard.id + 1} is starting.`.yellow)
})
