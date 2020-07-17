                                    /**      1st Task feetToMile       */

function feetToMile(feet) {
    var mile = feet * 0.000189394;
    return mile;
}
var result = feetToMile(5280).toFixed(4);
console.log(result);


                                    /**    2nd Task woodCalculator    */

function woodCalculator(chair, table, bed){
    var totalChair = chair * 1;
    var totalTable = table * 3;
    var totalBed = bed * 5;
    var TotalWood = totalChair+totalTable+totalBed;
    return TotalWood;
}

var allWood = woodCalculator(1, 1, 1);
console.log("The amount of wood you need to make furiture (in cubic foot) :", allWood);

                                    /**   3rd Task brickCalculator   */

function brickCalculator(floor){
    if(floor > 20){
        var brickstage1 = 10 * 15 * 1000;
        var brickstage2 = 10 * 12 * 1000;
        var brickstage3 = (floor - 20) * 10 * 1000;
        var brickTotal = brickstage1+brickstage2+brickstage3;
    }
    else if(floor <= 20 && floor > 10){
        var brickstage1 = 10 * 15 * 1000;
        var brickstage2 = (floor - 10) * 12 * 1000;
        var brickTotal = brickstage1+brickstage2;
    }
    else if(floor <= 10){
        var brickTotal = floor * 15 * 1000;
    }
    return brickTotal;
}

var sum = brickCalculator(35);
console.log("You have to buy total bricks :", sum);


                                    /**   4th Task tinyFriend   */

function tinyFriend(name){
    var friend = name[0];

    for(var i = 0; i < name.length; i++){   
        var elements = name[i];
        if(elements.length < friend.length){
        var friend = elements;
    }
    }
  
    return friend;
}

var name = ["Atikur", "Rahim", "Ishtiyak", "Rayhan", "Abul", "Masum"];
var result = tinyFriend(name);
console.log("My tiny friend is : ", result);