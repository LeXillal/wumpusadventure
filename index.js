'use-strict'

const fs      = require('fs')
const YAML    = require('js-yaml')
const { ShardingManager } = require('discord.js')

require('colors')

const cfg     = YAML.safeLoad(fs.readFileSync('./settings.yml'))
const manager = new ShardingManager('./shard.js', { token: cfg.discord.token })

manager.on('launch', (shard) => console.log(`Launching shard ${shard.id + 1}`))

manager.spawn().catch(console.error)
