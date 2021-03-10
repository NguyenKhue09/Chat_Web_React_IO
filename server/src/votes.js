// After 15s, receive API from FE, and see who will die.
// List API
// Axrray[Obj]
const fakeAPI = require("./fakeAPIs");
const cleanup = require("./cleanup");
let Arr = fakeAPI.testGetVotes();
let playerList = fakeAPI.getPlayerList();

function getVotes(Arr, playerList) {
    Arr.forEach(v => {
        // clean up
        playerList = cleanup.cleanup("newVotes", playerList);
        let index, indexV;
        index = v.beVoted;
        indexV = v.vote;
        playerList[index].beVoted++;
        playerList[index].whoVote = [...playerList[index].whoVote, indexV];
    });
    return playerList;
};
function whoDie(){
    let findWhoDied =  getVotes(Arr,playerList);
    let maxVoted = Math.max.apply(Math,findWhoDied.map(player =>{ return player.beVoted}));
    let playerDiedList = findWhoDied.reduce((a,v) => { 
        if (v.beVoted === maxVoted) a.push(v);
        return a; 
    });
    return playerDiedList;
};

module.exports = {
    getVotes,
    whoDie,
}

console.log(getVotes(Arr, playerList));
//console.log(whoDie());