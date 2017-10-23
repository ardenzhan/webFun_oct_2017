var daysUntilMyBirthday = 60;

for (var x = daysUntilMyBirthday; x >= 0; x--){
    if (x > 30){
        console.log(x + " days until my birthday. Such a long time... :(");
    }
    if (x <= 30 && x >= 5){
        console.log(x + " days until my birthday. Almost :O");
    }
    if (x < 5 && x > 1){
        console.log(x + " DAYS UNTIL MY BIRTHDAY!!!");
    }
    if (x == 1){
        console.log("1 DAY UNTIL MY BIRTHDAY!!!");
    }
    if (x == 0){
        console.log("♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•\n" +
        "♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪\n" +
        "*•♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•«");
    }
}