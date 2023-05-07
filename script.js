// Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).

function internalAnglesSum(sides){
var sum = (sides - 2) * 180
    return sum + "°"
}

console.log(internalAnglesSum(6))