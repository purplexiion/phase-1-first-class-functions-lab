// Code your solution in this file
let drivers = []

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2)

}
returnFirstTwoDrivers(['Antonia', 'Nuru', 'Mike', 'Anna'])

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(2)
}
returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])

const selectingDrivers = [][returnFirstTwoDrivers + returnLastTwoDrivers]