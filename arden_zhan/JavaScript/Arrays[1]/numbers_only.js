function numbersOnly(arr){
    // var num_arr = [];
    for (let x = 0; x < arr.length; x++){
        if (typeof(arr[x]) !== "number"){
            arr.splice(x, 1);

            // num_arr.push(arr[x]);
        }
    }
    // return num_arr;
    return arr;
}

var newArray = numbersOnly([1, "apple", -3, "orange", 0.5]);
// newArray is [1, -3, 0.5]
console.log(newArray); 

//commented in function code are from making a new array
//yes, still need to return the array if using splice