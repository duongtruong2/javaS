const gameEvents = new Map([
    [17, 'GOAL'],
    [36, 'Substitution'],
    [47, 'GUAL'],
    [64, 'Yellow card'],
    [69, 'red card'],
    [70, 'Substitution'],
    [72, 'Substitution'],
    [76, 'GOAL'],
    [80, 'GOAL'],
    [92, 'Yellow card'],
]);
//1
const events = [...new Set(gameEvents.values())];
console.log(events);

//2
gameEvents.delete(64);

//3
console.log(`An event happende,on average,every ${90 / gameEvents.size}minutes`);
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(`An event happende,on average,every ${time / gameEvents.size}minutes`);

//4
for (const [min, event] of gameEvents) {
    const HALF = min <= 45 ? 'FINRST' : 'SECOND';
    console.log(`[HALF] ${min}: ${event}`);
}