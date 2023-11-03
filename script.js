// // 1
// function myFunction(herf) {
//     if (herf == "a" && herf == "e" && herf == "i" && herf == "o" && herf == "u") {
//         return Boolean(herf)
//     }
//     else {
//         return Boolean(herf)
//     }
// }
// console.log(myFunction("a"))


// // 1.1
// function myFunction(herf) {
//     switch (herf) {
//         case "a":
//             return (Boolean(herf))
//         case "e":
//             return (Boolean(herf))
//         case "i":
//             return (Boolean(herf))
//         case "o":
//             return (Boolean(herf))
//         case "u":
//             return (Boolean(herf))
//         default:
//             return (Boolean(herf))
//     }
// }
// if (myFunction) {
//     console.log("saitdir")
// }
// else {
//     console.log("samitdir")

// }
// console.log(myFunction("a"))


// 2
// function Calculate(eded_1, eded_2, operator) {
//     if( eded_1 && eded_2 ===Number){
//         if (operator == "+") {
//             return eded_1 + eded_2
//         }
//         else if(operator == "-"){
//             return eded_1 - eded_2
//         }
//         else if(operator == "*"){
//             return eded_1 * eded_2
//         }
//         else if(operator == "/"){
//             if(eded_2 == 0){
//                 return "0-a bolmek olmaz!"
//             }
//              return eded_1 / eded_2
//         }
//         else{
//             return "duzgun eded girin!"
//         }
//     }
//     return "number daxil edin!"
    
// }
// console.log(Calculate("sagol","salam","/"))


// praktika
const tipCalculator = hesab => hesab >= 50 && hesab <= 300 ? hesab * 0.15 : hesab * 0.2
const calculator = tamHesab => tamHesab + tipCalculator(tamHesab)

console.log(calculator(300))