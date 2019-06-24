'use-strict'

const fs      = require('fs')
const util    = require('util')
const YAML    = require('js-yaml')
const Discord = require('discord.js')

const bot = new Discord.Client()
bot.cfg   = YAML.safeLoad(fs.readFileSync('./settings.yml'))

bot.log   = (...params) => console.log(`${bot.shard.id + 1}:`, ...params)
bot.on('ready', function onReady() {
  bot.log('Ready to work.')
})

bot.login()
