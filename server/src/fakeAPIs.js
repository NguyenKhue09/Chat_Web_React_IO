// fakeAPIs to test getRole
function getPlayerList() {

    let playerList = [
        {
            user: "name1",
            body: "message",
            role: null,
            beVoted: 0,
            whoVote: [],
            senderId: "tV8lT_s7WQ9ATqstAAAB"
        },
        {
            user: "name2",
            body: "message",
            role: null,
            beVoted: 0,
            whoVote: [],
            senderId: "mN5fT_s7WQ9ATqstAAAB"
        },
        {
            user: "name3",
            body: "message",
            role: null,
            beVoted: 0,
            whoVote: [],
            senderId: "sX0mL_s7WQ9ATqstAAAB"
        }
    ]
    

    return playerList;
};

function testGetRole() {
    let player = {
        user: "name",
        body: "message",
        role: null,
        beVoted: 0,
        whoVote: [],
        senderId: "tV8lT_s7WQ9ATqstAAAB"
    }

    return player;
};

function testGetVotes() {
    let API =
    [
        {
            vote: 0,
            beVoted: 1,
        },
        {
            vote: 1,
            beVoted: 0,
        },
        {
            vote: 2,
            beVoted: 0,
        },
        
    ]

    return API;
};

module.exports = {
    getPlayerList,
    testGetRole,
    testGetVotes,
}