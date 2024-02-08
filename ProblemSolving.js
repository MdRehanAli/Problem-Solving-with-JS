
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
console.log(calculateMoney(1055))
console.log(calculateMoney(93))
console.log(calculateMoney(-130))


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

console.log(checkName("Salman"))
console.log(checkName("RAFEE"))
console.log(checkName("Jhankar"))
console.log(checkName(199))
console.log(checkName(["Rashed"]))




function deleteInvalids(array) {
    if (Array.isArray(array) !== true) {
        return "Invalid Array"
    }

    let newArray = []
    for (arr of array) {
        if ((typeof (arr) === 'number') && !isNaN(arr)) {
                newArray.push(arr)
        }
    }
    return newArray


}
console.log(deleteInvalids([1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]))
console.log(deleteInvalids(["1", { num: 2 }, NaN]))
console.log(deleteInvalids([1, 2, -3]))
console.log(deleteInvalids({ num: [1, 2, 3] }))




function password(obj) {

    let keys = Object.keys(obj)
    let values = Object.values(obj)

    if (keys.includes("name") !== true || keys.includes("birthYear") !== true || keys.includes("siteName") !== true) {
        return "invalid"
    }
    else if (obj.birthYear < 1000 || obj.birthYear > 9999) {
        return "invalid"
    }
    let sites = obj.siteName
    let names = obj.name
    let birth = obj.birthYear

    capital_letter = sites[0].toUpperCase()
    small_letter = sites.slice(1).toLowerCase()
    // sites = sites.toLowerCase()
    sites = capital_letter + small_letter

    const Pass = sites + "#" + names + "@" + birth
    return Pass
    
}

console.log(password({ name: "kolimuddin", birthYear: 1999, siteName: "GOOGLE" }))
console.log(password({ name: "rahat", birthYear: 2002, siteName: "FACEBOOK" }))
console.log(password({ name: "toky", birthYear: 200, siteName: "Facebook" }))
console.log(password({ name: "maisha", birthYear: 2002 }))



function monthlySavings(arr, livingCost) {

    if (Array.isArray(arr) === false || typeof (livingCost) !== 'number') {
        return "invalid input"
    }


    let totalPayments = 0
    for (let payments of arr) {
        if (payments >= 3000) {
            const tax = payments * (1 / 5)
            payments = payments - tax
        }
        totalPayments = totalPayments + payments

    }
    const totalSavings = totalPayments - livingCost

    if (totalSavings < 0) {
        return "earn more"
    }
    return totalSavings
}

console.log(monthlySavings([1000, 2000, 3000], 5400))
console.log(monthlySavings([1000, 2000, 2500], 5000))
console.log(monthlySavings([900, 2700, 3400], 10000))
console.log(monthlySavings(100, [ 900 , 2700 , 3400]))