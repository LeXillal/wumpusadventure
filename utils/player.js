// @author : EnderSpirit
'use strict';

let playerMap = new Map();

class Player {

    constructor(id, connection) {
        if (typeof playerMap.get(id) === undefined) {
            this.id = id
            this.connection = connection
            this.load(id, connection)
            playerMap.set(id, this)
            return this
        }
        else {
            return playerMap.get(id)
        }
    }

    load(id, connection) {
        connection.query('SELECT * FROM players WHERE id = ?', [id],
        (error, results, fields) => {
            if (error) throw error;
            
            // Everything is ok
            this.data = results[0]
          });
    }

    update() {
        query = "UPDATE players SET "

        for (var key in this.data) {
            if (this.data.hasOwnProperty(key)) {
                if (key != "id")
                    query += key +"="+this.data[key]+","
            }
        }

        query = query.substring(0, query.length-1)
        query += " WHERE id=?"
        console.log(query) // DEBUG
    }



}

module.exports = Player;