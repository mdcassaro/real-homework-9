const queryHelper = require("./db/queryHelper");
const questions = require("./questions");
async function main(){
    try {
        // const songs = await queryHelper.selectFirst10("top5000");
        // console.table(songs);
        // const albums = await queryHelper.selectFirst10("topAlbums");
        // console.table(albums);
        mainMenu();
    } catch(err){
        console.log(err);
    }
}

main();

async function mainMenu() {
    const answer = await questions.mainMenu();
    if(answer.choice === "Exit"){
        queryHelper.connection.end();
    } else if(answer.choice === "Search titles by artist"){
        const answer = await questions.askArtist();
        const data = await queryHelper.selectSongByArtist(answer.artist);
        console.table(data);
        mainMenu();
    }
}
