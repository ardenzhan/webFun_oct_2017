// PART 1
var students = [ 
    {first_name:  'Michael', last_name : 'Jordan'},
    {first_name : 'John', last_name : 'Rosales'},
    {first_name : 'Mark', last_name : 'Guillen'},
    {first_name : 'KB', last_name : 'Tonel'}
]

function printArray(arr){
    for (var x in arr){
        console.log(arr[x].first_name + " " + arr[x].last_name);
    }
}
printArray(students);


console.log();
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

function printObject(obj){
    // in is for objects
    // of is for array
    for (var title in obj){
        console.log(title);
        for (var name of obj[title]){
            console.log((obj[title].indexOf(name) + 1) + " - " 
                + name.first_name.toUpperCase() + " " 
                + name.last_name.toUpperCase() + " - " 
                + (name.first_name.length + name.last_name.length));
        }
    }
}
printObject(users);