'use-strict'

const fs      = require('fs')
const util    = require('util')
const YAML    = require('js-yaml')
const Discord = require('discord.js')

const bot = new Discord.Client()
bot.cfg   = YAML.safeLoad(fs.readFileSync('./settings.yml'))

// Some events and useful functions
bot.log   = (...params) => console.log(`${bot.shard.id + 1}:`, ...params)
bot.on('ready', function onReady() {
  bot.log('Ready to work.')
})

bot.on('message', function onMessage() {
  // wip
})

// Scan directory and load commands found
bot.commands = require('./utils/commandLoader.js')
bot.commands.scanDirectory('./commands').forEach((command) => {
  // Load this command
  bot.commands.add(command)
  bot.log('Loaded command', command.name)
})

bot.login()
