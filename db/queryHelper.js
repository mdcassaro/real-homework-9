const connection = require("./connection");

function selectFirst10(tableName){
    return connection.query("SELECT * FROM ?? LIMIT 10", [tableName]);
}

function selectSongByArtist(artistName){
    return connection.query("SELECT * FROM top5000 WHERE artist = ? LIMIT 10", [artistName]);
}

module.exports = {
    selectFirst10,
    selectSongByArtist,
    connection
}

