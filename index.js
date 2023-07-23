
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']



const returnFirstTwoDrivers = function (drivers) {
    const cloned = [...drivers]
    return cloned.slice(0, 2)
}


const returnLastTwoDrivers = (drivers) => {
    const cloned = [...drivers]
    return cloned.slice(-2)
}


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]



function createFareMultiplier(multiplier) {
    const fareMultiplier = function (multiplier) {
        return multiplier * multiplier
    }
    return fareMultiplier
}
function fareDoubler(doubler) {
    return doubler * 2
}

const fareTripler = (tripler) => { return tripler * 3 }



function selectDifferentDrivers(drivers, callback) {
    return callback(drivers)
}
