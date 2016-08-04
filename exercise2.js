var players = [
    {firstName: 'Cam', lastName: 'Newton', position: 'QB', touchdowns: 32},
    {firstName: 'Derek', lastName: 'Anderson', position: 'QB', touchdowns: 0},
    {firstName: 'Jonathan', lastName: 'Stewart', position: 'RB', touchdowns: 12},
    {firstName: 'Mike', lastName: 'Tolbert', position: 'RB', touchdowns: 8},
    {firstName: 'Fozzy', lastName: 'Whittaker', position: 'RB', touchdowns: 3},
    {firstName: 'Ted', lastName: 'Ginn', position: 'WR', touchdowns: 9},
    {firstName: 'Devin', lastName: 'Funchess', position: 'WR', touchdowns: 2}
];

function findName(player){
    return player.firstName === "Mike";
}
console.log(players.find(findName));




var findPosition = players.map(function(pos){
    if (pos.position === "RB"){
    return pos;
}
});
console.log(findPosition);

// should be...
//Running backs
players.filter(function(p){
    return p.position === 'RB';
})

//LastNames
players.map(function(p){
    return p.lastName;
})

//Full names of all running backs with more than 5 touchdowns.
players
    .filter(function(player){
        return player.touchdowns > 5 && player.position == 'RB';
    })
    .map(function(player){
        return player.firstName + ' ' + player.lastName;
    });

//Number of touchdowns by runningbacks
players
    .filter(function(player){
        return player.position =='RB';
    })
    .reduce(function(total, player){
        total += player.touchdowns;
    },0)
