'use-strict'

const fs = require('fs')

// Scan an entire directory
function scanDirectory(path) {
  var files = fs.readdirSync(path)

  var loaded = []
  files.forEach(function(file) {
    loaded = loaded.concat(scanFile(path, file))
  })

  return loaded
}

// Scan a specific file
function scanFile(folder, file) {
  var path = `${folder}/${file}`
  var name   = file.split('.')[0]
  var format = file.split('.')[1]

    //   ...if '*.js' file: load it as a command
  var loaded = []
  if (format === 'js') require(`.${path}`)().forEach((m) => loaded.push(m))

  return loaded
}

exports.scanDirectory = scanDirectory
exports.scanFile      = scanFile
exports.list          = []

exports.add   = function add(object) {
  // Simply add it to the list
  exports.list.push(object)
}

exports.get   = function get(name) {
  // First method: exact name or exact aliases
  var matching = exports.list.filter((c) => c.name === name || c.aliases.includes(name))
  if (matching.length) return matching

  // Second method: starting with its name
  matching = exports.list.filter((c) => c.name.startsWith(name))
  if (matching.length) return matching
}

exports.delete = function del(name) {
  var commands = exports.get(name)
  commands.forEach(function singleDelete(command) {
    var index = exports.list.indexOf(command)

    exports.list.splice(index, 1)
  })
}
