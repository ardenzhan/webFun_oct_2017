function slots(quarters){
    var result = 0;
    var winning = 69;
    var prize = 0;
    
    for (let x = quarters; x >= 0; x--){
        //test if 1/100 chance to win 50-100 quarters
        if (Math.trunc(Math.random() * 100) == winning){
            prize = Math.trunc(Math.random() * 50) + 50;
            quarters = x + prize;
            console.log(":o you won " + prize + " quarters! You had " + x + " and now " + quarters + ".");
            return quarters;    
        }

        if (x == 0){
            console.log("You wasted all your quarters :(");
            return x;
        }
    }
}

console.log("Total after starting with 100 quarters: " + slots(100));
console.log("Total after starting with 10 quarters: " + slots(10));