// function to div role:
// Receive Clients List
// Return Role for each client.
/*
    Arr[Obj];

    player = {
        user: "name",
        body: "message",
        role: "",
        senderId: "tV8lT_s7WQ9ATqstAAAB"
    }
*/

function getRole( player ) {
    // if role = 0 => people
    //  role = 1 => wolf
    player.role = Math.floor(Math.random() * 2); // random 0 or 1.
    // Test:
    // console.log("Role: ", player.role);
    return player;
};

module.exports = {
    getRole,
};