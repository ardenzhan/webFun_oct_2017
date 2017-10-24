// PART 1
var students = [ 
    {first_name:  'Michael', last_name : 'Jordan'},
    {first_name : 'John', last_name : 'Rosales'},
    {first_name : 'Mark', last_name : 'Guillen'},
    {first_name : 'KB', last_name : 'Tonel'}
]

function printArray1(arr){
    for (var x in arr){
        console.log(arr[x].first_name + " " + arr[x].last_name);
    }
}
printArray1(students);



// PART 2
var users = {
    'Students': [ 
        {first_name:  'Michael', last_name : 'Jordan'},
        {first_name : 'John', last_name : 'Rosales'},
        {first_name : 'Mark', last_name : 'Guillen'},
        {first_name : 'KB', last_name : 'Tonel'}
    ],
    'Instructors': [
        {first_name : 'Michael', last_name : 'Choi'},
        {first_name : 'Martin', last_name : 'Puryear'}
    ]
}


// function printObject(obj){
//     var propertyNames = Object.keys(obj);
//     for (var x in obj){
//         var prop = eval(x);
//         console.log(obj.prop);
//         // for (var x = 0; x < obj.propertyNames[x]){
//         //     console.log(y);
//         // }
//     }
// }

// printObject(users);