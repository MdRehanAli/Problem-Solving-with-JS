
function calculateMoney(ticketSale) {
    if (ticketSale < 0) {
        return "Invalid Number"
    }

    const gateManFee = 500
    const perStaffFee = 50
    const totalStaff = 8
    const staffFee = perStaffFee * totalStaff
    const totalCost = gateManFee + staffFee

    const ticketPrice = 120
    const totalIncome = ticketSale * ticketPrice

    const remainAmount = totalIncome - totalCost
    return remainAmount
}

console.log(calculateMoney(10))


function checkName(name) {
    if (typeof (name) !== 'string') {
        return "invalid"
    }

    name = name.toLowerCase()
    if (name.endsWith("a") || name.endsWith("y") || name.endsWith("i") || name.endsWith("e") || name.endsWith("o") || name.endsWith("u") || name.endsWith("w")) {
        return "Good Name"
    }
    return "Bad Name"
}

console.log(checkName(199))




function deleteInvalids(array) {
    if (Array.isArray(array) !== true) {
        return "Invalid Array"
    }

    let newArray = []
    for (arr of array) {
        if (typeof (arr) === 'number') {
            // if( arr == !isNaN )

            newArray.push(arr)
        }
    }
    return newArray


}
console.log(deleteInvalids([1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]))
console.log(deleteInvalids(["1", { num: 2 }, NaN]))
console.log(deleteInvalids([1, 2, -3]))
console.log(deleteInvalids({ num: [1, 2, 3] }))
