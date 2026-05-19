class Oops{
    name = "shantanu"
    age = 21
    experince="Fresher"
    
}
//How i access this value
let obj = new Oops()
console.log(`my name is ${obj.name} and i am ${obj.age} year old and i am ${obj.experince}`)

// Inhertiance
class parent{
    parentMoney=10000
}
class child extends parent{
    myMoney = 1000
    wealth() {
        return (this.myMoney+this.parentMoney)
    }
}
let obj1 = new child()
console.log(`my amount is ${obj1.myMoney} and my parent amount is ${obj1.parentMoney} then total amount i have ${obj1.parentMoney+obj1.myMoney}`)