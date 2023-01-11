// Code your solution in this file!



const returnFirstTwoDrivers = function (drivers){
    return drivers.slice(0,2);
    }


const returnLastTwoDrivers = drivers => {
    return drivers.slice(drivers.length - 2, drivers.length);

    }


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(multiply){
    return function(amount){
        return amount * multiply;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, returnedDrivers){
    return returnedDrivers(drivers)
}