// =====party1======/
const mapFor = new Map()

for(let i = 0; i <= 100; i++){
    mapFor.set(i, null)
}

//========party2=======//

mapFor.forEach((value, key)=>{
    console.log(value)
    if(key % 3 === 0){
        console.log("divaded the 3")
    }
    if(key % 5 === 0){
        console.log("oops here is 5")
    }else if(key % 3 === 0 && key % 5 === 0){
        console.log("i can beelive that");
    }
})

//===========party3=========//

const arr = [["36", "не приватизирован", "4 собственника", "Парковая"],
["45", "приватизирован", "3 собственника", "Луговая"],
["56", "не приватизирован", "1 собственник", "Луговая"],
["56", "приватизирован", "5 собственников", "Ленина"],
["25", "не приватизирован", "2 собственника", "Ленина"]]

arr.forEach((item) => {
    let numHome = Number(item[0])
    let streetHome = item[3]
    console.log(streetHome)
})

function getHome(str){
    str.forEach((item)=>{
        
    })
}
console.log(getHome(arr))
