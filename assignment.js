//https://github.com/mukarrabin/assignment.js

// Kilometer to meter conversion:
function kilometerToMeter(meter){
    if(meter<0){
        return ("This is a nagetive Value")
    }
    else{
        var kilometer = meter*1000;
        return kilometer;
    }
}
var result = kilometerToMeter(6);
console.log(result);




// Caltulate the Budget
function budgetCalculator(a,b,c){
    if(watch<0 || mobile<0 || laptop<0){
        return ("Your input is invalid")
    }
    else{
        var watchCost= watch*50;
        var mobileCost= mobile*100;
        var laptopCost= laptop*500;
    
        totalCost=watchCost+mobileCost+laptopCost;
        return totalCost;

    }
}
var watch=2;
var mobile=2;
var laptop=1;
var allGadget = budgetCalculator(watch, mobile, laptop);
console.log(allGadget);



// Calculating the hotel cost
 function hotelCost(day){
    var rent = 0;
    if(day<0){
        return "iInvalid Input";
    }
    else if (day <= 10 && day>0){
        rent = day*100;
    }
    else if( day<=20){
        var firstPart = 10*100;
        var remaining = day-10;
        var secondPart = remaining*80;
        rent = firstPart+secondPart;
    }
    else{
        var firstPart = 10*100;
        var secondPart = 10*80;
        var remaining = day-20;
        var thirdPart = remaining*50;
        rent = firstPart+secondPart+thirdPart;
    }
    return rent;
}
var count = hotelCost(0);
console.log(count);

// Finding the largest name (Incomplete)
 function getBigNum(names){
    var larger = names[0];
    for(var i=0; i<=names.length; i++){
        var element = names[i];
        if (element >larger){
            larger = element;
        }
    }
    return larger;
}

var output = getBigNum(['as', 'adwdwdsx78', 'stausif', 'sade', 'qwed']);
console.log(output);