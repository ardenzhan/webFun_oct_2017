function fancy(arr, symbol, reverse){
    if (symbol == null){
        symbol = "->";
    }

    if (reverse == null){
        for (let x = 0; x < arr.length; x++){
            console.log(x + " " + symbol + " " + arr[x]);
        } 
    } else if (reverse == true){
        for (let x = arr.length - 1; x >= 0; x--){
            console.log(x + " " + symbol + " " + arr[x]);
        }
    }
}

fancy(["James", "Jill", "Jane", "Jack"]);

console.log("custom symbol:");
fancy(["James", "Jill", "Jane", "Jack"], "=>");

console.log("reverse order:");
fancy(["James", "Jill", "Jane", "Jack"], "=>", true);