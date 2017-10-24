var start = 1;
var total = 0;
var days = 30;

for (var x = 1; x <= days; x++){
    total = total + start;

    start = start * 2;
}
console.log("Reward after 30 days: $" + total * 0.01);


//BONUS
function howManyDays(money){
    if (money < 0){
        return null;
    }

    var total = 0;
    var reward = 1;
    var days = 1;
    var pennies = Math.round(money * 100); //floats are dumb. adds extra decimals so can't compare

    while (total < pennies){
        total = total + reward;
        if (total >= pennies){
            return days;
        }
        reward = reward * 2;
        days++;
    }
}
console.log("Days to make $10,000: " + howManyDays(10000));
console.log("Days to make 1 bilion: " + howManyDays(1000000000));
console.log("Days to make infinite money: " + howManyDays(Infinity));