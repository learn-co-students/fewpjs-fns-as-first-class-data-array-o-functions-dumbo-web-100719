
let wakeDog = function wakeDog(a, b) {
    return `Wake ${a} the ${b}`
};

let leashDog =function leashDog(a,b){
    return `Leash ${a} the ${b}`
}
let throwFrisbee= function throwFrisbee(a, b){
    return `Throw the frisbee for ${a} the ${b}`
}   
let walkHome= function walkHome(a,b){
    return `Walk home with ${a} the ${b}`
}
let unleashDog= function unleashDog(a,b){
    return `Unleash ${a} the ${b}`
}

let walkToPark = function walkToPark(a,b){
    return `Walk to the park with ${a} the ${b}`
}



var routine = [
    wakeDog,
    leashDog,
    walkToPark,
    throwFrisbee,
    walkHome,
    unleashDog
]
// for(let i=0;i<routine;i++)
//     {
//         routine[i]
//     }    

function exerciseDog(a,b){
    let newRoutine = routine.map(function(item){
      return  item(a,b);
    })
    return newRoutine
}

