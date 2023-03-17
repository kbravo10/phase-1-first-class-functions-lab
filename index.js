// Code your solution in this file!


const returnFirstTwoDrivers = function(array){
    return array.slice(0,2);
}

const returnLastTwoDrivers = function(array){
    return [array[array.length - 2], array[array.length - 1]];
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(interger){
    return (function(fare){
        return fare * interger;
    })
} 

function fareDoubler(fare){
    const newFare = createFareMultiplier(2)(fare);
    return newFare;
}

function fareTripler(fare){
    const newFare = createFareMultiplier(3)(fare);
    return newFare;
}

function selectDifferentDrivers(array, func){
    return(func(array));
}